export async function POST(req) {
  try {
    const { email, goal } = await req.json();

    const API_KEY = process.env.MAILERLITE_API_KEY;
    const GROUP_ID = process.env.MAILERLITE_GROUP_ID;

    // STEP 1: Create or update subscriber
    const createRes = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        email,
        fields: {
          goal: goal || "",
        },
        status: "active",
      }),
    });

    const createData = await createRes.json();

    if (!createRes.ok) {
      console.error("Create subscriber error:", createData);
      return Response.json({ success: false, step: "create", data: createData }, { status: 400 });
    }

    // STEP 2: Add subscriber to group (CRITICAL FIX)
    const groupRes = await fetch(
      `https://connect.mailerlite.com/api/subscribers/${encodeURIComponent(email)}/groups/${GROUP_ID}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const groupData = await groupRes.json();

    if (!groupRes.ok) {
      console.error("Add to group error:", groupData);
      return Response.json({ success: false, step: "group", data: groupData }, { status: 400 });
    }

    return Response.json({ success: true });

  } catch (err) {
    console.error("API ERROR:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}