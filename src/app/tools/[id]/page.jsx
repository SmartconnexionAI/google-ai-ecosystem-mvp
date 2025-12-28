import Link from "next/link";
import { notFound } from "next/navigation";
import { loadTools, loadModels } from "../../../utils/loadContent";

export default function ToolPage({ params }) {
  const tools = loadTools();
  const models = loadModels();

  const tool = tools.find((t) => t.id === params.id);

  if (!tool) {
    notFound();
  }

  const poweredByModels = models.filter((model) =>
    tool.poweredBy?.includes(model.id)
  );

  return (
    <div>
      <h1>{tool.name}</h1>

      <p style={{ fontStyle: "italic" }}>{tool.summary}</p>

      <h2>Why it matters</h2>
      <p>{tool.whyItMatters}</p>

      <h2>Tool details</h2>
      <ul>
        <li>
          <strong>Type:</strong> {tool.toolType}
        </li>
        <li>
          <strong>Agentic level:</strong> {tool.agenticLevel}
        </li>
        <li>
          <strong>Target users:</strong>{" "}
          {tool.targetUser?.join(", ") || "—"}
        </li>
        <li>
          <strong>Access tiers:</strong> {tool.accessTier.join(", ")}
        </li>
      </ul>

      {poweredByModels.length > 0 && (
        <>
          <h2>Powered by models</h2>
          <ul>
            {poweredByModels.map((model) => (
              <li key={model.id}>
                <Link href={`/models/${model.id}`}>{model.name}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
