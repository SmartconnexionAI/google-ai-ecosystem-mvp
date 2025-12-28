import { notFound } from "next/navigation";
import { loadFromDir } from "../../../utils/loadContent";

export default function UpdateDetailPage({ params }) {
  const updates = loadFromDir("src/content/updates");
  const update = updates.find((u) => u.id === params.id);

  if (!update) {
    notFound();
  }

  return (
    <div>
      <h1>{update.title}</h1>

      <p style={{ color: "#777" }}>
        {update.date} • {update.changeType}
        {update.impactLevel ? ` • Impact: ${update.impactLevel}` : ""}
      </p>

      <h2>What changed</h2>
      <p>{update.whatChanged}</p>

      <h2>Why it matters</h2>
      <p>{update.whyItMatters}</p>
    </div>
  );
}
