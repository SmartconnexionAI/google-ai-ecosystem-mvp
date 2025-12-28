import { notFound } from "next/navigation";
import { loadFromDir } from "../../../utils/loadContent";

export default function PricingDetailPage({ params }) {
  const plans = loadFromDir("src/content/pricing");
  const plan = plans.find((p) => p.id === params.id);

  if (!plan) {
    notFound();
  }

  return (
    <div>
      <h1>{plan.name}</h1>

      <p style={{ fontStyle: "italic" }}>{plan.summary}</p>

      <h2>Price</h2>
      <p>{plan.price}</p>

      <h2>Included models</h2>
      <ul>
        {plan.includedModels.map((model, index) => (
          <li key={index}>{model}</li>
        ))}
      </ul>

      <h2>Included tools</h2>
      <ul>
        {plan.includedTools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>

      <h2>Usage limits</h2>
      <p>{plan.limitsSummary}</p>

      <h2>Best for</h2>
      <p>{plan.idealUser}</p>
    </div>
  );
}
