import Link from "next/link";
import { loadFromDir } from "../../utils/loadContent";

export default function UpdatesPage() {
  const updates = loadFromDir("src/content/updates").sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div>
      <h1>What’s Changed</h1>
      <p>
        This ecosystem evolves continuously. Below are the most important
        changes that affect how tools and models are used.
      </p>

      {updates.map((update) => (
        <div
          key={update.id}
          style={{
            marginBottom: "24px",
            paddingBottom: "16px",
            borderBottom: "1px solid #eee"
          }}
        >
          <Link href={`/updates/${update.id}`}>
            <strong>{update.title}</strong>
          </Link>

          <div style={{ color: "#555", marginTop: "4px" }}>
            {update.date} • {update.changeType}
          </div>

          <div style={{ marginTop: "6px" }}>
            {update.whatChanged}
          </div>
        </div>
      ))}
    </div>
  );
}
