import CodeBlock from "@/components/CodeBlock";
import SectionCard from "@/components/SectionCard";
import Warning from "@/components/Warning";

const mdxComponents = {
  Warning,
  SectionCard,
  pre: (props: any) => {
    // Extract language from className (e.g., "language-javascript")
    const language =
      props.children?.props?.className?.replace("language-", "") || "text";
    const code = props.children?.props?.children || "";

    return <CodeBlock language={language}>{code}</CodeBlock>;
  },
  code: (props: any) => {
    // Handle inline code
    if (typeof props.children === "string" && !props.children.includes("\n")) {
      return (
        <code className="bg-zinc-800 text-zinc-200 px-1.5 py-0.5 rounded text-sm font-mono">
          {props.children}
        </code>
      );
    }
    return <code {...props} />;
  },
};

export default mdxComponents;
