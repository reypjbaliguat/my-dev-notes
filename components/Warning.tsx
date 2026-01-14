import { ReactNode } from "react";

export default function Warning({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-4 py-3">
      <div className="flex items-start gap-2">
        <span className="text-yellow-400">⚠</span>
        <div className="text-sm text-yellow-200">{children}</div>
      </div>
    </div>
  );
}
