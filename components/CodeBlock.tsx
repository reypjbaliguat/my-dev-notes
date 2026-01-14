import { ReactNode } from "react";

export default function CodeBlock({
  children,
  language,
}: {
  children: ReactNode;
  language?: string;
}) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-zinc-800">
      <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 text-xs text-zinc-400">
        <span>{language ?? "code"}</span>
      </div>
      <pre className="overflow-x-auto bg-zinc-950 p-4 text-sm">
        <code className="text-zinc-100">{children}</code>
      </pre>
    </div>
  );
}
