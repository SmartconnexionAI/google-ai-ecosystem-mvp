import { notFound } from "next/navigation";
import { loadFromDir } from "../../../utils/loadContent";

export default function LabPage({ params }) {
  const labs = loadFromDir("src/content/labs");
  const lab = labs.find((l) => l.id === params.id);

  if (!lab) {
    notFound();
  }

  return (
    <div>
      <h1>{lab.name}</h1>

      <p style={{ fontStyle: "italic" }}>{lab.summary}</p>

      <h2>Why it matters</h2>
      <p>{lab.whyItMatters}</p>

      <h2>Domain</h2>
      <p>{lab.domain}</p>

      <h2>Interaction model</h2>
      <ul>
        {lab.interactionModel.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Likely evolution</h2>
      <p>{lab.likelyEvolution}</p>

      <p style={{ marginTop: "20px", color: "#777" }}>
        Status: {lab.status}
      </p>
    </div>
  );
}
