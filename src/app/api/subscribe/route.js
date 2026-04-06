export async function POST(req) {
  try {
    const { email, goal } = await req.json();

    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        groups: [process.env.MAILERLITE_GROUP_ID], // FIXED
        fields: {
          goal: goal || "",
        },
        status: "active", // IMPORTANT
      }),
    });

    const data = await res.json();

    // 🔴 LOG ERROR FOR DEBUGGING
    if (!res.ok) {
      console.error("MailerLite ERROR:", data);
      return Response.json({ success: false, data }, { status: 400 });
    }

    return Response.json({ success: true, data });

  } catch (err) {
    console.error("API ERROR:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}