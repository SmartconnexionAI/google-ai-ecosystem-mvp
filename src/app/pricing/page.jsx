import Link from "next/link";
import { loadFromDir } from "../../utils/loadContent";

export default function PricingPage() {
  const plans = loadFromDir("src/content/pricing");

  return (
    <div>
      <h1>Pricing & Access</h1>
      <p>
        Google’s AI offerings are available through multiple tiers, designed for
        different usage levels and needs.
      </p>

      <ul>
        {plans.map((plan) => (
          <li key={plan.id} style={{ marginBottom: "14px" }}>
            <Link href={`/pricing/${plan.id}`}>
              <strong>{plan.name}</strong>
            </Link>
            <div style={{ color: "#555" }}>
              {plan.price} — {plan.summary}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
