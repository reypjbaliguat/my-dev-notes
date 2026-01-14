import CodeBlock from "@/components/CodeBlock";
import SectionCard from "@/components/SectionCard";
import Warning from "@/components/Warning";

const mdxComponents = {
  Warning,
  SectionCard,
  pre: (props: React.HTMLProps<HTMLPreElement>) => (
    <CodeBlock>{props.children}</CodeBlock>
  ),
};

export default mdxComponents;
