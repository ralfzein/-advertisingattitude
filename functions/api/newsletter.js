import { createTransport } from "nodemailer";

/**
 * POST /api/newsletter
 */
export async function onRequestPost({ request, env }) {
  try {
    const { name, email } = await request.json();

    if (!email) {
      return new Response(
        JSON.stringify({ success: false, message: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const senderEmail = env.BRAND_EMAIL;
    const senderPass = env.BRAND_PASS;

    const transporter = createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: senderEmail,
        pass: senderPass,
      },
    });

    await transporter.sendMail({
      from: `Website Newsletter <${senderEmail}>`,
      to: senderEmail,
      subject: `New newsletter signup: ${name || "No name provided"}`,
      text: `New signup:\nName: ${name || "(not provided)"}\nEmail: ${email}`,
      html: `<p><strong>Name:</strong> ${name || "(not provided)"}<br>
             <strong>Email:</strong> ${email}</p>`,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Subscription received and email sent.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Newsletter send error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send notification email.",
        error: err.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
