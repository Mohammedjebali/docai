import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import { isAdmin } from "@/lib/admin";
import AdminDashboard from "./AdminDashboard";

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdmin(user.email)) {
    redirect("/dashboard");
  }

  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

  const [
    doctorsCountRes,
    casesCountRes,
    casesThisMonthRes,
    feedbackCountRes,
    recentDoctorsRes,
    recentCasesRes,
    feedbackUsefulRes,
    feedbackNotRelevantRes,
    knowledgeCountRes,
  ] = await Promise.all([
    supabase.from("doctors").select("*", { count: "exact", head: true }),
    supabase.from("cases").select("*", { count: "exact", head: true }),
    supabase
      .from("cases")
      .select("*", { count: "exact", head: true })
      .gte("created_at", monthStart),
    supabase.from("feedback").select("*", { count: "exact", head: true }),
    supabase
      .from("doctors")
      .select("id, first_name, last_name, email, specialty, created_at")
      .order("created_at", { ascending: false })
      .limit(10),
    supabase
      .from("cases")
      .select(
        "id, chief_complaint, status, created_at, doctors(first_name, last_name), patients(age, sex)"
      )
      .order("created_at", { ascending: false })
      .limit(10),
    supabase
      .from("feedback")
      .select("*", { count: "exact", head: true })
      .eq("rating", "useful"),
    supabase
      .from("feedback")
      .select("*", { count: "exact", head: true })
      .eq("rating", "not_relevant"),
    supabase
      .from("knowledge_chunks")
      .select("*", { count: "exact", head: true }),
  ]);

  const stats = {
    totalDoctors: doctorsCountRes.count ?? 0,
    totalCases: casesCountRes.count ?? 0,
    casesThisMonth: casesThisMonthRes.count ?? 0,
    totalFeedback: feedbackCountRes.count ?? 0,
    feedbackUseful: feedbackUsefulRes.count ?? 0,
    feedbackNotRelevant: feedbackNotRelevantRes.count ?? 0,
    knowledgeChunks: knowledgeCountRes.count ?? 0,
  };

  const recentDoctors = (recentDoctorsRes.data ?? []).map((d) => ({
    id: d.id as string,
    firstName: d.first_name as string,
    lastName: d.last_name as string,
    email: d.email as string,
    specialty: (d.specialty as string) || "",
    createdAt: d.created_at as string,
  }));

  const recentCases = (recentCasesRes.data ?? []).map((c) => {
    const doctor = c.doctors as unknown as {
      first_name: string;
      last_name: string;
    } | null;
    const patient = c.patients as unknown as {
      age: number;
      sex: string;
    } | null;
    return {
      id: c.id as string,
      chiefComplaint: c.chief_complaint as string,
      status: c.status as string,
      createdAt: c.created_at as string,
      doctorName: doctor
        ? `${doctor.first_name} ${doctor.last_name}`
        : "",
      patientAge: patient?.age ?? 0,
      patientSex: patient?.sex ?? "",
    };
  });

  return (
    <AdminDashboard
      stats={stats}
      recentDoctors={recentDoctors}
      recentCases={recentCases}
    />
  );
}
