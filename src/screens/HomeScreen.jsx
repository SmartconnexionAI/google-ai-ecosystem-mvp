import { loadModels } from "../utils/loadContent";

export default function HomeScreen() {
  const models = loadModels();

  return (
    <div>
      <h1>Google AI Ecosystem</h1>
      <p>
        A living map of Google’s AI ecosystem — models, tools, labs, and strategy.
      </p>

      <h2>Foundational Models</h2>

      <ul>
        {models.map((model) => (
          <li key={model.id}>
            <strong>{model.name}</strong> — {model.summary}
          </li>
        ))}
      </ul>

      <p style={{ marginTop: "20px", color: "#555" }}>
        Content-driven MVP • Updated regularly
      </p>
    </div>
  );
}
