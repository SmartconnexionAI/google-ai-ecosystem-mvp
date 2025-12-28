import Link from "next/link";

export default function Navigation() {
  return (
    <nav style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
      <strong>Google AI Ecosystem</strong>{" "}
      <Link href="/" style={{ marginLeft: "15px" }}>
        Home
      </Link>
      <Link href="/models" style={{ marginLeft: "15px" }}>
        Models
      </Link>
      <Link href="/tools" style={{ marginLeft: "15px" }}>
        Tools
      </Link>
      <Link href="/labs" style={{ marginLeft: "15px" }}>
        Labs
      </Link>
      <Link href="/pricing" style={{ marginLeft: "15px" }}>
        Pricing
      </Link>
      <Link href="/updates" style={{ marginLeft: "15px" }}>
        Updates
      </Link>
    </nav>
  );
}
