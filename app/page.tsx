import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Developer Learning Notes</h1>
      <p className="text-zinc-400 mb-8">
        Things I learn, forget, and don’t want to relearn the hard way.
      </p>

      <Link href="/learn" className="underline text-blue-400">
        View notes →
      </Link>
    </>
  );
}
