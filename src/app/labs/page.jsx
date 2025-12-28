import Link from "next/link";
import { loadFromDir } from "../../utils/loadContent";

export default function LabsPage() {
  const labs = loadFromDir("src/content/labs");

  return (
    <div>
      <h1>Google Labs Experiments</h1>
      <p>
        Google Labs is where experimental AI concepts are tested before becoming
        products.
      </p>

      <ul>
        {labs.map((lab) => (
          <li key={lab.id} style={{ marginBottom: "12px" }}>
            <Link href={`/labs/${lab.id}`}>
              <strong>{lab.name}</strong>
            </Link>
            <div style={{ color: "#555" }}>{lab.summary}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
