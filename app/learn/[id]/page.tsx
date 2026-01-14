import { getNoteBySlug } from "@/lib/notes";
import mdxComponents from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function NotePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const { content, data } = getNoteBySlug(id);
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-3">{data.title}</h1>
        <p className="text-lg text-blue-300 italic font-medium">
          {data.description}
        </p>
      </div>

      <article
        className="prose prose-invert prose-lg max-w-none 
        [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-cyan-400 [&_h2]:border-b [&_h2]:border-cyan-500/30 [&_h2]:pb-2
        [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-emerald-400 [&_h3]:mt-6 [&_h3]:mb-3
        [&_p]:text-gray-200 [&_p]:leading-7
        [&_strong]:text-yellow-300 [&_strong]:font-semibold
        [&_em]:text-purple-300
        [&_code]:text-pink-300 [&_code]:bg-gray-800/60 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
        [&_a]:text-blue-400 [&_a]:hover:text-blue-300 [&_a]:no-underline [&_a]:hover:underline
        [&_ul]:text-gray-200 [&_li]:text-gray-200
        [&_blockquote]:border-l-4 [&_blockquote]:border-orange-400 [&_blockquote]:text-orange-200 [&_blockquote]:bg-orange-900/10
        [&_table]:border-collapse [&_table]:border [&_table]:border-gray-600 [&_table]:rounded-lg [&_table]:overflow-hidden
        [&_th]:bg-gray-800 [&_th]:text-gray-200 [&_th]:font-semibold [&_th]:p-3 [&_th]:border-b [&_th]:border-gray-600
        [&_td]:text-gray-300 [&_td]:p-3 [&_td]:border-b [&_td]:border-gray-700
        [&_tr:hover]:bg-gray-800/50"
      >
        <MDXRemote source={content} components={mdxComponents} />
      </article>
    </>
  );
}
