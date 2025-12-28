import Link from "next/link";
import { loadModels } from "../../utils/loadContent";

export default function ModelsPage() {
  const models = loadModels();

  return (
    <div>
      <h1>Foundational AI Models</h1>
      <p>
        These models form the intelligence foundation of Google’s AI ecosystem.
      </p>

      <ul>
        {models.map((model) => (
          <li key={model.id} style={{ marginBottom: "12px" }}>
            <Link href={`/models/${model.id}`}>
              <strong>{model.name}</strong>
            </Link>
            <div style={{ color: "#555" }}>{model.summary}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
