import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextRequest, NextResponse } from "next/server";
import { isRateLimited } from "@/lib/rate-limit";
import { sendRegistrationNotification } from "@/lib/email";

interface RegistrationBody {
  website?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  mineSites?: string;
  labourHireCompany?: string;
  employmentPeriod?: string;
  summary?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RegistrationBody;

    // Honeypot check — if this field has a value, it's a bot
    if (body.website) {
      return NextResponse.json({ success: true }); // Silently succeed for bots
    }

    const { fullName, email, phone, mineSites, labourHireCompany, employmentPeriod, summary } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
      return NextResponse.json({ error: "Full name is required" }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const { env, ctx } = await getCloudflareContext();

    // Rate limiting
    if (await isRateLimited(env.DB)) {
      return NextResponse.json(
        { error: "We are currently experiencing high volume. Please try again in a little while." },
        { status: 429 }
      );
    }

    const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for") || "unknown";

    await env.DB.prepare(
      `INSERT INTO registrations (full_name, email, phone, mine_sites, labour_hire_company, employment_period, summary, consented_at, ip_address)
       VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'), ?)`
    )
      .bind(
        fullName.trim(),
        email.trim(),
        phone?.trim() || null,
        mineSites?.trim() || null,
        labourHireCompany?.trim() || null,
        employmentPeriod?.trim() || null,
        summary?.trim() || null,
        ip
      )
      .run();

    // Send email notification (non-blocking)
    const notificationEmail = env.ADMIN_NOTIFICATION_EMAIL || "info@unhappybanking.com.au";
    const emailPromise = sendRegistrationNotification(
      {
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone?.trim() || null,
        mineSites: mineSites?.trim() || null,
        labourHireCompany: labourHireCompany?.trim() || null,
        employmentPeriod: employmentPeriod?.trim() || null,
        summary: summary?.trim() || null,
        createdAt: new Date().toISOString(),
      },
      env.RESEND_API_KEY,
      notificationEmail
    );

    // Use waitUntil if available (Cloudflare Workers) to not block response
    try {
      ctx.waitUntil(emailPromise);
    } catch {
      // In dev mode, just await the email
      await emailPromise;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "An error occurred. Please try again." }, { status: 500 });
  }
}
