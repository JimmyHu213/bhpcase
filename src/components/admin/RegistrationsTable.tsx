"use client";

import { useState, Fragment } from "react";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";

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

interface Props {
  registrations: Registration[];
}

type SortField = "id" | "full_name" | "email" | "mine_sites" | "labour_hire_company" | "employment_period" | "created_at";
type SortDir = "asc" | "desc";

const PAGE_SIZE = 25;

const COLUMNS: { key: SortField; label: string }[] = [
  { key: "id", label: "ID" },
  { key: "full_name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "mine_sites", label: "Mine Sites" },
  { key: "labour_hire_company", label: "Labour Hire Co." },
  { key: "employment_period", label: "Period" },
  { key: "created_at", label: "Registered" },
];

export default function RegistrationsTable({ registrations }: Props) {
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const sorted = [...registrations].sort((a, b) => {
    const aVal = a[sortField] ?? "";
    const bVal = b[sortField] ?? "";
    const cmp = String(aVal).localeCompare(String(bVal));
    return sortDir === "asc" ? cmp : -cmp;
  });

  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);
  const paginated = sorted.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("asc");
    }
    setPage(0);
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDir === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />;
  };

  return (
    <div className="bg-white border border-border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-light">
              <th className="w-8 px-4 py-3"></th>
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  onClick={() => toggleSort(col.key)}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-body cursor-pointer hover:text-primary transition-colors"
                >
                  <div className="flex items-center gap-1">
                    {col.label}
                    <SortIcon field={col.key} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={COLUMNS.length + 1} className="px-4 py-12 text-center text-slate-body">
                  No registrations yet.
                </td>
              </tr>
            ) : (
              paginated.map((reg) => (
                <Fragment key={reg.id}>
                  <tr
                    onClick={() => setExpandedId(expandedId === reg.id ? null : reg.id)}
                    className="border-b border-border hover:bg-light/50 cursor-pointer transition-colors"
                  >
                    <td className="px-4 py-3">
                      <ChevronRight
                        size={14}
                        className={`text-slate-body transition-transform ${expandedId === reg.id ? "rotate-90" : ""}`}
                      />
                    </td>
                    <td className="px-4 py-3 text-slate-body">{reg.id}</td>
                    <td className="px-4 py-3 font-medium text-primary">{reg.full_name}</td>
                    <td className="px-4 py-3 text-slate-body">{reg.email}</td>
                    <td className="px-4 py-3 text-slate-body">{reg.mine_sites || "\u2014"}</td>
                    <td className="px-4 py-3 text-slate-body">{reg.labour_hire_company || "\u2014"}</td>
                    <td className="px-4 py-3 text-slate-body">{reg.employment_period || "\u2014"}</td>
                    <td className="px-4 py-3 text-slate-body whitespace-nowrap">
                      {reg.created_at ? new Date(reg.created_at).toLocaleDateString() : "\u2014"}
                    </td>
                  </tr>
                  {expandedId === reg.id && (
                    <tr key={`${reg.id}-detail`} className="border-b border-border bg-light/30">
                      <td colSpan={COLUMNS.length + 1} className="px-8 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-semibold text-primary">Phone:</span>{" "}
                            <span className="text-slate-body">{reg.phone || "N/A"}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-primary">IP Address:</span>{" "}
                            <span className="text-slate-body">{reg.ip_address || "N/A"}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-primary">Consented At:</span>{" "}
                            <span className="text-slate-body">{reg.consented_at}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-primary">Created At:</span>{" "}
                            <span className="text-slate-body">{reg.created_at}</span>
                          </div>
                          {reg.summary && (
                            <div className="md:col-span-2">
                              <span className="font-semibold text-primary">Summary:</span>
                              <p className="text-slate-body mt-1 whitespace-pre-wrap">{reg.summary}</p>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-border">
          <p className="text-xs text-slate-body">
            Showing {page * PAGE_SIZE + 1}\u2013{Math.min((page + 1) * PAGE_SIZE, sorted.length)} of {sorted.length}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="px-3 py-1 text-sm border border-border rounded hover:bg-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="px-3 py-1 text-sm border border-border rounded hover:bg-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
