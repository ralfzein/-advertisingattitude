import { Resend } from "resend";

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

    // choose the correct recipient
    const toEmail =
      category === "I am a Creator"
        ? env.TALENT_EMAIL
        : env.BRAND_EMAIL;

    // initialize resend client
    const resend = new Resend(env.RESEND_API_KEY);

    // convert attachments to base64 manually
    const attachments = [];
    for (const file of files) {
      if (file && typeof file.name === "string") {
        const arrayBuffer = await file.arrayBuffer();
        const base64Content = btoa(
          String.fromCharCode(...new Uint8Array(arrayBuffer))
        );
        attachments.push({
          filename: file.name,
          content: base64Content,
        });
      }
    }

    // send email via Resend
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
