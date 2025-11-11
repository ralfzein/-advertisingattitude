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

    const subject = `New newsletter signup: ${name || "No name provided"}`;
    const text = `New newsletter signup from ${email}\n\nName: ${name || "(not provided)"}`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Website Newsletter <${senderEmail}>`,
        to: [senderEmail],
        subject,
        text,
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to send newsletter email");

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
