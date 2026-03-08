"use client";

import { Highlight, themes } from "prism-react-renderer";
import { ReactNode } from "react";

export default function CodeBlock({
  children,
  language = "text",
}: {
  children: ReactNode;
  language?: string;
}) {
  // Extract the code content from children
  const code = typeof children === "string" ? children : String(children);

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-zinc-800">
      <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 text-xs text-zinc-400">
        <span>{language}</span>
        <button
          onClick={() => navigator.clipboard?.writeText(code.trim())}
          className="text-zinc-500 hover:text-zinc-300 transition-colors"
          title="Copy code"
        >
          Copy
        </button>
      </div>
      <Highlight
        theme={{
          ...themes.vsDark,
          styles: [
            ...themes.vsDark.styles,
            {
              types: ["function"],
              style: {
                color: "#DCDCAA", // VS Code function color
              },
            },
            {
              types: ["constant"],
              style: {
                color: "#4FC1FF", // VS Code constant color
              },
            },
            {
              types: ["keyword"],
              style: {
                color: "#C586C0", // VS Code keyword color
              },
            },
            {
              types: ["string"],
              style: {
                color: "#CE9178", // VS Code string color
              },
            },
            {
              types: ["comment"],
              style: {
                color: "#6A9955", // VS Code comment color
                fontStyle: "italic",
              },
            },
            {
              types: ["number"],
              style: {
                color: "#B5CEA8", // VS Code number color
              },
            },
            {
              types: ["builtin", "class-name"],
              style: {
                color: "#4EC9B0", // VS Code type/class color
              },
            },
            {
              types: ["operator"],
              style: {
                color: "#D4D4D4", // VS Code operator color
              },
            },
          ],
        }}
        code={code.trim()}
        language={language as any}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} overflow-x-auto bg-zinc-950 p-4 text-sm leading-relaxed`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="inline-block w-8 text-zinc-500 text-right mr-4 select-none">
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
