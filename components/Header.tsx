"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center gap-4">
          {!isHomePage && (
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors"
              aria-label="Go back"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-400"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Dev Notes</h1>
            <p className="text-sm text-zinc-400">
              Things I don't want to forget
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
