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
        <header className="border-b border-zinc-800">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <h1 className="text-lg font-semibold">Dev Notes</h1>
            <p className="text-sm text-zinc-400">
              Things I don’t want to forget
            </p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
