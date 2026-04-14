import { createClient } from "@supabase/supabase-js";

const EMBEDDING_MODEL = "gemini-embedding-001";
const EMBEDDING_DIMENSIONS = 1536;

interface KnowledgeChunk {
  id: string;
  source: string;
  title: string;
  content: string;
  metadata: Record<string, unknown>;
  similarity: number;
}

function getServiceClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function generateEmbedding(text: string): Promise<number[]> {
  const apiKey = process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) throw new Error("GOOGLE_AI_API_KEY is not set");

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${EMBEDDING_MODEL}:embedContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: `models/${EMBEDDING_MODEL}`,
      content: { parts: [{ text }] },
      taskType: "RETRIEVAL_QUERY",
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Embedding API error (${response.status}): ${err}`);
  }

  const data = await response.json();
  const values: number[] = data.embedding.values;

  if (values.length > EMBEDDING_DIMENSIONS) {
    return values.slice(0, EMBEDDING_DIMENSIONS);
  }
  if (values.length < EMBEDDING_DIMENSIONS) {
    const padded = new Array(EMBEDDING_DIMENSIONS).fill(0);
    for (let i = 0; i < values.length; i++) padded[i] = values[i];
    return padded;
  }
  return values;
}

export async function searchKnowledge(
  queryEmbedding: number[],
  matchCount: number = 12
): Promise<KnowledgeChunk[]> {
  const supabase = getServiceClient();

  const { data, error } = await supabase.rpc("match_knowledge", {
    query_embedding: JSON.stringify(queryEmbedding),
    match_count: matchCount,
  });

  if (error) {
    throw new Error(`Knowledge search failed: ${error.message}`);
  }

  return (data as KnowledgeChunk[]) || [];
}
