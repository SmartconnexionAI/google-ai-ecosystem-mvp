import "../styles/base.css";

import Navigation from "../components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <div style={{ padding: "20px" }}>
          <Navigation />
          <main style={{ marginTop: "20px" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
