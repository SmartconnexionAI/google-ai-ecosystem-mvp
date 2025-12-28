import Link from "next/link";
import { notFound } from "next/navigation";
import { loadModels, loadTools } from "../../../utils/loadContent";

export default function ModelPage({ params }) {
  const models = loadModels();
  const tools = loadTools();

  const model = models.find((m) => m.id === params.id);

  if (!model) {
    notFound();
  }

  const relatedModels = models.filter((m) =>
    model.relationships?.related?.includes(m.id)
  );

  const usedByTools = tools.filter((tool) =>
    model.relationships?.usedBy?.includes(tool.id)
  );

  return (
    <div>
      <h1>{model.name}</h1>

      <p style={{ fontStyle: "italic" }}>{model.summary}</p>

      <h2>Why it matters</h2>
      <p>{model.whyItMatters}</p>

      <h2>Key capabilities</h2>
      <ul>
        {model.capabilities.map((cap, index) => (
          <li key={index}>{cap}</li>
        ))}
      </ul>

      <h2>Details</h2>
      <ul>
        <li>
          <strong>Reasoning level:</strong> {model.reasoningLevel}
        </li>
        <li>
          <strong>Context window:</strong> {model.contextWindow}
        </li>
        <li>
          <strong>Modalities:</strong> {model.modalities.join(", ")}
        </li>
        <li>
          <strong>Access tiers:</strong> {model.accessTier.join(", ")}
        </li>
      </ul>

      {relatedModels.length > 0 && (
        <>
          <h2>Related models</h2>
          <ul>
            {relatedModels.map((m) => (
              <li key={m.id}>
                <Link href={`/models/${m.id}`}>{m.name}</Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {usedByTools.length > 0 && (
        <>
          <h2>Used by tools</h2>
          <ul>
            {usedByTools.map((tool) => (
              <li key={tool.id}>{tool.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
