import { getNoteBySlug } from "@/lib/notes";
import mdxComponents from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function NotePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const { content, data } = getNoteBySlug(id);
  console.log(params.id);
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <article className="prose prose-invert max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </article>
    </>
  );
}
