import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, services, budget, message } = body;

    // Basic validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please describe your project goals or current issues." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is not configured.");
      return NextResponse.json(
        {
          error:
            "Email service configuration missing. Please add RESEND_API_KEY to your environment variables or contact us directly at exocross.tech@gmail.com.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = "exocross.tech@gmail.com";
    const fromSender =
      process.env.RESEND_FROM_EMAIL || "Exocross Inquiries <onboarding@resend.dev>";

    const servicesList = Array.isArray(services) && services.length > 0
      ? services.join(", ")
      : "Not specified";

    const budgetScope = budget || "Flexible / Not specified";
    const companyName = company && company.trim() ? company.trim() : "Individual / Not specified";
    const phoneNumber = phone && phone.trim() ? phone.trim() : "Not provided";

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Project Inquiry — Exocross</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #F7F8FA; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #151A23;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #F7F8FA; padding: 32px 16px;">
            <tr>
              <td align="center">
                <table role="presentation" width="100%" style="max-width: 620px; background-color: #FFFFFF; border: 1px solid #E4E7EC; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 20px rgba(16, 24, 40, 0.04);">
                  <!-- Header Banner -->
                  <tr>
                    <td style="background-color: #151A23; padding: 24px 32px; border-bottom: 3px solid #245BDB;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <span style="color: #245BDB; font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
                              NEW LEAD TRANSMISSION
                            </span>
                            <h1 style="color: #FFFFFF; font-size: 22px; font-weight: 700; margin: 6px 0 0 0; letter-spacing: -0.5px;">
                              Exocross Client Inquiry
                            </h1>
                          </td>
                          <td align="right" style="vertical-align: middle;">
                            <span style="display: inline-block; padding: 6px 12px; background: rgba(36, 91, 219, 0.2); border: 1px solid rgba(36, 91, 219, 0.4); border-radius: 6px; color: #70A0FF; font-size: 11px; font-family: monospace;">
                              24h SLA
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 32px;">
                      <!-- Quick Facts Table -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px; font-size: 14px; border-collapse: collapse;">
                        <tr style="border-bottom: 1px solid #F2F4F7;">
                          <td style="padding: 10px 0; color: #778191; font-weight: 600; width: 140px; font-family: monospace; font-size: 12px;">CLIENT NAME:</td>
                          <td style="padding: 10px 0; color: #151A23; font-weight: 700; font-size: 15px;">${name}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #F2F4F7;">
                          <td style="padding: 10px 0; color: #778191; font-weight: 600; font-family: monospace; font-size: 12px;">WORK EMAIL:</td>
                          <td style="padding: 10px 0;">
                            <a href="mailto:${email}" style="color: #245BDB; text-decoration: none; font-weight: 600;">${email}</a>
                          </td>
                        </tr>
                        <tr style="border-bottom: 1px solid #F2F4F7;">
                          <td style="padding: 10px 0; color: #778191; font-weight: 600; font-family: monospace; font-size: 12px;">PHONE NUMBER:</td>
                          <td style="padding: 10px 0;">
                            ${phone && phone.trim() ? `<a href="tel:${phone.trim()}" style="color: #245BDB; text-decoration: none; font-weight: 600;">${phone.trim()}</a>` : `<span style="color: #778191;">Not provided</span>`}
                          </td>
                        </tr>
                        <tr style="border-bottom: 1px solid #F2F4F7;">
                          <td style="padding: 10px 0; color: #778191; font-weight: 600; font-family: monospace; font-size: 12px;">COMPANY / ORG:</td>
                          <td style="padding: 10px 0; color: #151A23;">${companyName}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #F2F4F7;">
                          <td style="padding: 10px 0; color: #778191; font-weight: 600; font-family: monospace; font-size: 12px;">BUDGET SCOPE:</td>
                          <td style="padding: 10px 0; color: #151A23; font-weight: 600;">
                            <span style="background: #F0F5FF; color: #245BDB; padding: 3px 8px; border-radius: 4px; font-family: monospace; font-size: 12px; font-weight: 700;">${budgetScope}</span>
                          </td>
                        </tr>
                        <tr style="border-bottom: 1px solid #F2F4F7;">
                          <td style="padding: 10px 0; color: #778191; font-weight: 600; font-family: monospace; font-size: 12px;">FOCUS AREAS:</td>
                          <td style="padding: 10px 0; color: #151A23; font-weight: 500;">${servicesList}</td>
                        </tr>
                      </table>

                      <!-- Message Box -->
                      <div style="background-color: #F7F8FA; border: 1px solid #E4E7EC; border-left: 4px solid #245BDB; border-radius: 8px; padding: 18px; margin-bottom: 24px;">
                        <span style="display: block; font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: bold; text-transform: uppercase; color: #778191; margin-bottom: 8px;">
                          PROJECT GOALS & CHALLENGES
                        </span>
                        <div style="color: #151A23; font-size: 14px; line-height: 1.65; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">${message}</div>
                      </div>

                      <!-- Direct Reply Action -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #E4E7EC;">
                        <tr>
                          <td>
                            <p style="margin: 0; font-size: 12px; color: #778191; line-height: 1.5;">
                              This message was submitted via the official contact form on <strong>www.exocross.com</strong>.
                              Click <strong>Reply</strong> to respond directly to <strong>${email}</strong>.
                            </p>
                          </td>
                          <td align="right" style="vertical-align: middle;">
                            <a href="mailto:${email}?subject=Re:%20Exocross%20Project%20Inquiry" style="display: inline-block; background-color: #245BDB; color: #FFFFFF; font-size: 12px; font-weight: 600; text-decoration: none; padding: 10px 18px; border-radius: 6px;">
                              Reply to Lead →
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #F7F8FA; padding: 16px 32px; border-top: 1px solid #E4E7EC; font-size: 11px; color: #778191; font-family: monospace; text-align: center;">
                      EXOCROSS • Chennai, Tamil Nadu, India • +91 7604 830 742 • +91 81244 73373
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: fromSender,
      to: [toEmail],
      replyTo: email,
      subject: `[New Lead] ${name} (${companyName}) — ${budgetScope}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to dispatch email via Resend" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error: unknown) {
    console.error("Unexpected error in /api/contact:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
