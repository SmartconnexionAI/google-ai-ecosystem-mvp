import Link from "next/link";
import { loadTools } from "../../utils/loadContent";

export default function ToolsPage() {
  const tools = loadTools();

  return (
    <div>
      <h1>AI Tools & Platforms</h1>
      <p>
        These tools apply Google’s AI models across development, creativity, and
        productivity.
      </p>

      <ul>
        {tools.map((tool) => (
          <li key={tool.id} style={{ marginBottom: "12px" }}>
            <Link href={`/tools/${tool.id}`}>
              <strong>{tool.name}</strong>
            </Link>
            <div style={{ color: "#555" }}>{tool.summary}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
