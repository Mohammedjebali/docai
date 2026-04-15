import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateEmbedding, searchKnowledge } from "@/lib/embeddings";

const SYSTEM_PROMPT = `Tu es DocAI, un assistant d'aide a la decision clinique pour les medecins. Tu aides les medecins avec les diagnostics differentiels, les options therapeutiques et les connaissances medicales.

REGLES STRICTES:
- Ne JAMAIS donner un diagnostic definitif unique. Toujours proposer plusieurs hypotheses diagnostiques.
- Citer les sources specifiques de la base documentaire utilisees.
- Repondre UNIQUEMENT en francais.
- Etre precis, structure et cliniquement pertinent.
- Inclure systematiquement un avertissement que tu es un outil d'aide a la decision, pas un avis medical.

AVERTISSEMENT OBLIGATOIRE: A la fin de chaque reponse, rappeler que ceci est un outil d'aide a la decision clinique et ne remplace pas le jugement clinique du medecin ni une consultation medicale.`;

export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user)
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });

  const { data: doctor } = await supabase
    .from("doctors")
    .select("id")
    .eq("user_id", user.id)
    .single();
  if (!doctor)
    return NextResponse.json(
      { error: "Profil medecin introuvable" },
      { status: 404 }
    );

  const body = await request.json();
  const { message, conversationHistory = [] } = body as {
    message: string;
    conversationHistory?: { role: string; content: string }[];
  };

  if (!message?.trim()) {
    return NextResponse.json({ error: "Message requis" }, { status: 400 });
  }

  try {
    const embedding = await generateEmbedding(message);
    const chunks = await searchKnowledge(embedding, 8);

    const contextText = chunks
      .map(
        (chunk, i) =>
          `[Source ${i + 1}: ${chunk.title}]\n${chunk.content}`
      )
      .join("\n\n");

    const sources = chunks.map((chunk) => ({
      title: chunk.title,
      snippet: chunk.content.slice(0, 200) + (chunk.content.length > 200 ? "..." : ""),
    }));

    const recentHistory = conversationHistory.slice(-10);
    const historyText = recentHistory
      .map((m) => `${m.role === "user" ? "Medecin" : "DocAI"}: ${m.content}`)
      .join("\n");

    const prompt = `${SYSTEM_PROMPT}

BASE DOCUMENTAIRE (extraits pertinents):
${contextText || "Aucun document pertinent trouve dans la base de connaissances."}

---

${historyText ? `HISTORIQUE DE LA CONVERSATION:\n${historyText}\n\n---\n\n` : ""}QUESTION DU MEDECIN:
${message}

Reponds de maniere structuree, claire et cliniquement pertinente.`;

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: { temperature: 0.4, maxOutputTokens: 2000 },
    });

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    if (!response) {
      throw new Error("Reponse vide du modele");
    }

    return NextResponse.json({ response, sources });
  } catch (error) {
    console.error("Assistant error:", error);
    return NextResponse.json(
      {
        response:
          "Je suis temporairement indisponible. Veuillez reessayer dans quelques instants.",
        sources: [],
      },
      { status: 200 }
    );
  }
}
