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

    const senderEmail =
      category === "I am a Creator"
        ? env.TALENT_EMAIL
        : env.BRAND_EMAIL;

    let attachments = [];
    for (const file of files) {
      if (file && typeof file.name === "string") {
        const arrayBuffer = await file.arrayBuffer();
        attachments.push({
          filename: file.name,
          content: Buffer.from(arrayBuffer).toString("base64"),
        });
      }
    }

    const emailBody = `
      Category: ${category}
      From: ${name}
      Email: ${email}
      ${country ? `Country: ${country}` : ""}
      ${portfolio ? `Portfolio: ${portfolio}` : ""}

      ${message}
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Website Form <${senderEmail}>`,
        to: [senderEmail],
        subject: `New message from ${name}`,
        text: emailBody,
        attachments,
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to send email");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
