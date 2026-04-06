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
        groups: ["183986113243776260"],
        fields: { goal },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return Response.json({ success: false, data }, { status: 400 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}