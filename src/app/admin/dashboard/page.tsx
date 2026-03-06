import { getCloudflareContext } from "@opennextjs/cloudflare";
import AdminHeader from "@/components/admin/AdminHeader";
import RegistrationsTable from "@/components/admin/RegistrationsTable";
import { Download } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Dashboard | BHP Victims Registry",
};

interface Registration {
  id: number;
  full_name: string;
  email: string;
  phone: string | null;
  mine_sites: string | null;
  labour_hire_company: string | null;
  employment_period: string | null;
  summary: string | null;
  consented_at: string;
  created_at: string;
  ip_address: string | null;
}

export default async function AdminDashboardPage() {
  const { env } = await getCloudflareContext();

  const countResult = await env.DB.prepare(
    "SELECT COUNT(*) as total FROM registrations"
  ).first<{ total: number }>();

  const { results: registrations } = await env.DB.prepare(
    "SELECT * FROM registrations ORDER BY created_at DESC"
  ).all<Registration>();

  return (
    <>
      <AdminHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats + Export row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
            <p className="text-xs text-slate-body uppercase tracking-widest font-semibold">
              Total Registrations
            </p>
            <p className="font-serif text-3xl font-bold text-primary mt-1">
              {countResult?.total ?? 0}
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/api/admin/export?format=csv"
              className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-4 py-2.5 rounded text-sm font-semibold transition-colors"
            >
              <Download size={16} /> Export CSV
            </a>
            <a
              href="/api/admin/export?format=txt"
              className="flex items-center gap-2 border border-border text-primary hover:bg-light px-4 py-2.5 rounded text-sm font-semibold transition-colors"
            >
              <Download size={16} /> Export TXT
            </a>
          </div>
        </div>

        {/* Table */}
        <RegistrationsTable registrations={registrations ?? []} />
      </div>
    </>
  );
}
