import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <div className="p-6">
          {children}
        </div>
      </body>
    </html>
  );
}