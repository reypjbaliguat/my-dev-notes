import Link from "next/link";

export default function NoteCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-700 hover:bg-zinc-800"
    >
      <h2 className="text-lg font-semibold text-zinc-100">{title}</h2>
      <p className="mt-1 text-sm text-zinc-400">{description}</p>
    </Link>
  );
}
