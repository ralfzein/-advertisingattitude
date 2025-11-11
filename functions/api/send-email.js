import { Resend } from "resend";

// Helper to convert large files safely to base64 in chunks
async function fileToBase64(file) {
  const reader = file.stream().getReader();
  const chunks = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    // Convert bytes to base64 without stack overflow
    chunks.push(btoa(String.fromCharCode(...value)));
  }
  return chunks.join("");
}

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

    const toEmail =
      category === "I am a Creator" ? env.TALENT_EMAIL : env.BRAND_EMAIL;

    const resend = new Resend(env.RESEND_API_KEY);

    // Convert all attachments safely
    const attachments = [];
    for (const file of files) {
      if (file && typeof file.name === "string") {
        const base64 = await fileToBase64(file);
        attachments.push({
          filename: file.name,
          content: base64,
        });
      }
    }

    const data = await resend.emails.send({
      from: `Website Form <${toEmail}>`,
      to: [toEmail],
      reply_to: email,
      subject: `New message from ${name}`,
      text: `Category: ${category}
From: ${name}
Email: ${email}
${country ? `Country: ${country}` : ""}
${portfolio ? `Portfolio Link: ${portfolio}` : ""}

${message}`,
      attachments,
    });

    return new Response(JSON.stringify({ success: true, data }), {
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
