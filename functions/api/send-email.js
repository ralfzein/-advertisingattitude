import { createTransport } from "nodemailer";

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

    // Choose correct sender credentials
    const senderEmail =
      category === "I am a Creator" ? env.TALENT_EMAIL : env.BRAND_EMAIL;
    const senderPass =
      category === "I am a Creator" ? env.TALENT_PASS : env.BRAND_PASS;

    // Create transporter
    const transporter = createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: { user: senderEmail, pass: senderPass },
    });

    // Build attachments safely for Cloudflare
    const attachments = [];
    for (const file of files) {
      if (file && typeof file.name === "string") {
        const arrayBuffer = await file.arrayBuffer();
        attachments.push({
          filename: file.name,
          content: new Uint8Array(arrayBuffer),
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
