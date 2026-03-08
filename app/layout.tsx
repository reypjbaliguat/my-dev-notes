import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "PJ Dev Notes",
  description: "PJ Personal engineering learnings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-10 pt-24">{children}</main>
      </body>
    </html>
  );
}
