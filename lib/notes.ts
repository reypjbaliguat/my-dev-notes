import fs from "fs";
import matter from "gray-matter";
import path from "path";

const NOTES_PATH = path.join(process.cwd(), "content/learn");

export function getAllNotes() {
  const files = fs.readdirSync(NOTES_PATH);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const source = fs.readFileSync(path.join(NOTES_PATH, file), "utf8");
    const { data } = matter(source);

    return {
      slug,
      title: data.title,
      description: data.description,
    };
  });
}

export function getNoteBySlug(slug: string) {
  const source = fs.readFileSync(path.join(NOTES_PATH, `${slug}.mdx`), "utf8");

  const { content, data } = matter(source);

  return { content, data };
}
