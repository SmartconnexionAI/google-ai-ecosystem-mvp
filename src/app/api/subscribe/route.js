export async function POST(req) {
  try {
    const { email, goal, stack } = await req.json();

    const API_KEY = process.env.MAILERLITE_API_KEY;
    const GROUP_ID = process.env.MAILERLITE_GROUP_ID;

    // STEP 1 — Create / update subscriber WITH STACK
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
          stack: stack || "",
        },
        status: "active",
      }),
    });

    const createData = await createRes.json();

    if (!createRes.ok) {
      console.error("Create error:", createData);
      return Response.json({ success: false }, { status: 400 });
    }

    // STEP 2 — FORCE add to group
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
      console.error("Group error:", groupData);
      return Response.json({ success: false }, { status: 400 });
    }

    return Response.json({ success: true });

  } catch (err) {
    console.error(err);
    return Response.json({ success: false }, { status: 500 });
  }
}