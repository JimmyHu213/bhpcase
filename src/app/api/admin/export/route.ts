import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextRequest, NextResponse } from "next/server";

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
}

const CSV_HEADERS = [
  "id", "full_name", "email", "phone", "mine_sites",
  "labour_hire_company", "employment_period", "summary",
  "consented_at", "created_at"
];

export async function GET(request: NextRequest) {
  try {
    const format = request.nextUrl.searchParams.get("format") || "csv";
    const { env } = await getCloudflareContext();

    const { results } = await env.DB.prepare(
      "SELECT id, full_name, email, phone, mine_sites, labour_hire_company, employment_period, summary, consented_at, created_at FROM registrations ORDER BY created_at DESC"
    ).all<Registration>();

    const registrations = results ?? [];
    const timestamp = new Date().toISOString().split("T")[0];

    if (format === "txt") {
      const text = registrations.length === 0
        ? "No registrations found."
        : registrations
            .map((r) =>
              [
                `--- Registration #${r.id} ---`,
                `Name: ${r.full_name}`,
                `Email: ${r.email}`,
                `Phone: ${r.phone || "N/A"}`,
                `Mine Sites: ${r.mine_sites || "N/A"}`,
                `Labour Hire Company: ${r.labour_hire_company || "N/A"}`,
                `Employment Period: ${r.employment_period || "N/A"}`,
                `Registered: ${r.created_at}`,
                `Summary: ${r.summary || "N/A"}`,
                "",
              ].join("\n")
            )
            .join("\n");

      return new NextResponse(text, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Content-Disposition": `attachment; filename="registrations-${timestamp}.txt"`,
        },
      });
    }

    // CSV format
    const csvRows = [
      CSV_HEADERS.join(","),
      ...registrations.map((r) =>
        CSV_HEADERS.map((h) => {
          const val = String(r[h as keyof Registration] ?? "");
          if (val.includes(",") || val.includes("\n") || val.includes('"')) {
            return `"${val.replace(/"/g, '""')}"`;
          }
          return val;
        }).join(",")
      ),
    ];

    return new NextResponse(csvRows.join("\n"), {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="registrations-${timestamp}.csv"`,
      },
    });
  } catch (error) {
    console.error("Export error:", error);
    return NextResponse.json({ error: "Export failed" }, { status: 500 });
  }
}
