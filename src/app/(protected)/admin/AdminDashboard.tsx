"use client";

import {
  Users,
  FolderOpen,
  CalendarDays,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Database,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

interface Stats {
  totalDoctors: number;
  totalCases: number;
  casesThisMonth: number;
  totalFeedback: number;
  feedbackUseful: number;
  feedbackNotRelevant: number;
  knowledgeChunks: number;
}

interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  specialty: string;
  createdAt: string;
}

interface CaseRow {
  id: string;
  chiefComplaint: string;
  status: string;
  createdAt: string;
  doctorName: string;
  patientAge: number;
  patientSex: string;
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function AdminDashboard({
  stats,
  recentDoctors,
  recentCases,
}: {
  stats: Stats;
  recentDoctors: Doctor[];
  recentCases: CaseRow[];
}) {
  const { t } = useTranslation();

  const statCards = [
    {
      label: t("admin.totalDoctors"),
      value: stats.totalDoctors,
      icon: Users,
      color: "text-primary",
      bg: "bg-primary/5",
    },
    {
      label: t("admin.totalCases"),
      value: stats.totalCases,
      icon: FolderOpen,
      color: "text-accent",
      bg: "bg-accent/5",
    },
    {
      label: t("admin.casesThisMonth"),
      value: stats.casesThisMonth,
      icon: CalendarDays,
      color: "text-warning",
      bg: "bg-warning/5",
    },
    {
      label: t("admin.totalFeedback"),
      value: stats.totalFeedback,
      icon: MessageSquare,
      color: "text-success",
      bg: "bg-success/5",
    },
  ];

  const statusConfig: Record<
    string,
    { label: string; color: string; icon: typeof Clock }
  > = {
    en_cours: {
      label: t("common.statusOngoing"),
      color: "text-warning",
      icon: Clock,
    },
    resolu: {
      label: t("common.statusResolved"),
      color: "text-success",
      icon: CheckCircle,
    },
    archive: {
      label: t("common.statusArchived"),
      color: "text-text-muted",
      icon: CheckCircle,
    },
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-text-dark">
          {t("admin.title")}
        </h1>
        <p className="mt-1 text-sm text-text-secondary">
          {t("admin.overview")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="bg-white rounded-lg border border-border shadow-sm p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                    {card.label}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-text-dark">
                    {card.value}
                  </p>
                </div>
                <div
                  className={`${card.bg} rounded-lg p-2.5`}
                >
                  <Icon size={20} strokeWidth={1.5} className={card.color} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-border shadow-sm">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="text-sm font-semibold text-text-dark">
              {t("admin.recentDoctors")}
            </h2>
          </div>
          {recentDoctors.length === 0 ? (
            <div className="px-5 py-8 text-center text-sm text-text-secondary">
              {t("admin.noData")}
            </div>
          ) : (
            <div className="divide-y divide-border">
              {recentDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="px-5 py-3 flex items-center justify-between"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-text-dark truncate">
                      {doc.firstName} {doc.lastName}
                    </p>
                    <p className="text-xs text-text-secondary truncate">
                      {doc.email}
                    </p>
                  </div>
                  <div className="text-end shrink-0 ml-4">
                    <p className="text-xs text-text-secondary">
                      {doc.specialty || "—"}
                    </p>
                    <p className="text-xs text-text-muted">
                      {formatDate(doc.createdAt)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg border border-border shadow-sm">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="text-sm font-semibold text-text-dark">
              {t("admin.recentCases")}
            </h2>
          </div>
          {recentCases.length === 0 ? (
            <div className="px-5 py-8 text-center text-sm text-text-secondary">
              {t("admin.noData")}
            </div>
          ) : (
            <div className="divide-y divide-border">
              {recentCases.map((c) => {
                const st = statusConfig[c.status] ?? statusConfig.en_cours;
                const StatusIcon = st.icon;
                return (
                  <div
                    key={c.id}
                    className="px-5 py-3 flex items-center justify-between"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-text-dark truncate">
                        {c.chiefComplaint}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {c.doctorName} — {c.patientAge}{" "}
                        {t("common.yearsOld")}, {c.patientSex}
                      </p>
                    </div>
                    <div className="text-end shrink-0 ml-4">
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-medium ${st.color}`}
                      >
                        <StatusIcon size={12} strokeWidth={1.5} />
                        {st.label}
                      </span>
                      <p className="text-xs text-text-muted">
                        {formatDate(c.createdAt)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-border shadow-sm p-5">
          <h2 className="text-sm font-semibold text-text-dark mb-4">
            {t("admin.feedbackSummary")}
          </h2>
          {stats.totalFeedback === 0 ? (
            <p className="text-sm text-text-secondary">
              {t("admin.noData")}
            </p>
          ) : (
            <div className="space-y-4">
              <FeedbackBar
                label={t("admin.useful")}
                count={stats.feedbackUseful}
                total={stats.totalFeedback}
                icon={<ThumbsUp size={14} strokeWidth={1.5} />}
                color="bg-success"
                textColor="text-success"
              />
              <FeedbackBar
                label={t("admin.notRelevant")}
                count={stats.feedbackNotRelevant}
                total={stats.totalFeedback}
                icon={<ThumbsDown size={14} strokeWidth={1.5} />}
                color="bg-error"
                textColor="text-error"
              />
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg border border-border shadow-sm p-5">
          <h2 className="text-sm font-semibold text-text-dark mb-4">
            {t("admin.knowledgeBase")}
          </h2>
          <div className="flex items-center gap-4">
            <div className="bg-primary/5 rounded-lg p-3">
              <Database size={24} strokeWidth={1.5} className="text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-dark">
                {stats.knowledgeChunks}
              </p>
              <p className="text-xs text-text-secondary">
                {t("admin.totalChunks")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeedbackBar({
  label,
  count,
  total,
  icon,
  color,
  textColor,
}: {
  label: string;
  count: number;
  total: number;
  icon: React.ReactNode;
  color: string;
  textColor: string;
}) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span
          className={`inline-flex items-center gap-1.5 text-sm font-medium ${textColor}`}
        >
          {icon}
          {label}
        </span>
        <span className="text-sm font-medium text-text-dark">
          {count}{" "}
          <span className="text-text-muted font-normal">({pct}%)</span>
        </span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-300`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
