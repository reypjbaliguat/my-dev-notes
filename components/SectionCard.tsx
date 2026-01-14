export default function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 mb-6">
      <h3 className="text-lg font-semibold text-zinc-100 mb-4 border-b border-zinc-700 pb-2">
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
