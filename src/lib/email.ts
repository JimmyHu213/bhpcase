interface RegistrationData {
  fullName: string;
  email: string;
  phone: string | null;
  mineSites: string | null;
  labourHireCompany: string | null;
  employmentPeriod: string | null;
  summary: string | null;
  createdAt: string;
}

export async function sendRegistrationNotification(
  data: RegistrationData,
  resendApiKey: string,
  notificationEmail: string
): Promise<void> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `BHP Registry <notifications@unhappybanking.com.au>`,
      to: [notificationEmail],
      subject: `New Registration: ${data.fullName}`,
      html: buildEmailHtml(data),
      text: buildEmailText(data),
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Resend API error:", response.status, errorBody);
  }
}

function buildEmailHtml(data: RegistrationData): string {
  return `
    <h2>New Victim Registration</h2>
    <table style="border-collapse:collapse; width:100%; max-width:600px;">
      <tr><td style="padding:8px; font-weight:bold; border-bottom:1px solid #eee;">Name</td>
          <td style="padding:8px; border-bottom:1px solid #eee;">${escapeHtml(data.fullName)}</td></tr>
      <tr><td style="padding:8px; font-weight:bold; border-bottom:1px solid #eee;">Email</td>
          <td style="padding:8px; border-bottom:1px solid #eee;">${escapeHtml(data.email)}</td></tr>
      <tr><td style="padding:8px; font-weight:bold; border-bottom:1px solid #eee;">Phone</td>
          <td style="padding:8px; border-bottom:1px solid #eee;">${escapeHtml(data.phone || "N/A")}</td></tr>
      <tr><td style="padding:8px; font-weight:bold; border-bottom:1px solid #eee;">Mine Sites</td>
          <td style="padding:8px; border-bottom:1px solid #eee;">${escapeHtml(data.mineSites || "N/A")}</td></tr>
      <tr><td style="padding:8px; font-weight:bold; border-bottom:1px solid #eee;">Labour Hire Company</td>
          <td style="padding:8px; border-bottom:1px solid #eee;">${escapeHtml(data.labourHireCompany || "N/A")}</td></tr>
      <tr><td style="padding:8px; font-weight:bold; border-bottom:1px solid #eee;">Employment Period</td>
          <td style="padding:8px; border-bottom:1px solid #eee;">${escapeHtml(data.employmentPeriod || "N/A")}</td></tr>
      <tr><td style="padding:8px; font-weight:bold; border-bottom:1px solid #eee;">Registered At</td>
          <td style="padding:8px; border-bottom:1px solid #eee;">${escapeHtml(data.createdAt)}</td></tr>
    </table>
    ${data.summary ? `<h3>Summary</h3><p>${escapeHtml(data.summary)}</p>` : ""}
  `;
}

function buildEmailText(data: RegistrationData): string {
  return [
    "New Victim Registration",
    "=======================",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "N/A"}`,
    `Mine Sites: ${data.mineSites || "N/A"}`,
    `Labour Hire Company: ${data.labourHireCompany || "N/A"}`,
    `Employment Period: ${data.employmentPeriod || "N/A"}`,
    `Registered At: ${data.createdAt}`,
    "",
    data.summary ? `Summary:\n${data.summary}` : "",
  ].join("\n");
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
