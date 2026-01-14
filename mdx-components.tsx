import CodeBlock from "@/components/CodeBlock";
import Warning from "@/components/Warning";

export default {
  Warning,
  pre: (props: any) => <CodeBlock>{props.children}</CodeBlock>,
};
