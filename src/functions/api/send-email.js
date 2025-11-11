import { createTransport } from "nodemailer";

/**
 * POST /api/send-email
 * Accepts: form data (multipart/form-data)
 */
export async function onRequestPost({ request, env }) {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const country = formData.get("country");
    const message = formData.get("message");
    const category = formData.get("category");
    const portfolio = formData.get("Portfolio");
    const files = formData.getAll("file");

    // Choose the right sender based on category
    const senderEmail =
      category === "I am a Creator"
        ? env.TALENT_EMAIL
        : env.BRAND_EMAIL;

    const senderPass =
      category === "I am a Creator"
        ? env.TALENT_PASS
        : env.BRAND_PASS;

    // Create the transporter (Zoho SMTP)
    const transporter = createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: senderEmail,
        pass: senderPass,
      },
    });

    const attachments = [];
    for (const file of files) {
      if (file && typeof file.name === "string") {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name,
          content: buffer,
        });
      }
    }

    // Send the email
    await transporter.sendMail({
      from: `Website Form <${senderEmail}>`,
      to: senderEmail,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Category: ${category}
From: ${name}
Email: ${email}
${country ? `Country: ${country}` : ""}
${portfolio ? `Portfolio Link: ${portfolio}` : ""}

${message}`,
      attachments,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
