import NoteCard from "@/components/NoteCard";
import { getAllNotes } from "@/lib/notes";

export default function LearnPage() {
  const notes = getAllNotes();

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Notes</h1>

      <div className="grid gap-4">
        {notes.map((note) => (
          <NoteCard
            key={note.slug}
            title={note.title}
            description={note.description}
            href={`/learn/${note.slug}`}
          />
        ))}
      </div>
    </>
  );
}
