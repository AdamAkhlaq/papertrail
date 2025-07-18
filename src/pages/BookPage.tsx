import { useParams } from "react-router-dom";
import { books } from "../data/books";
import { BookMetadata } from "../components/BookMetadata";
import { NoteCard } from "../components/NoteCard";

export default function BookPage() {
	const { slug } = useParams();
	const book = books.find((b) => b.slug === slug);
	if (!book) {
		return <div>Book not found</div>;
	}

	return (
		<div className="flex flex-col items-center justify-center space-y-8">
			<BookMetadata book={book} />
			<div className="w-full max-w-7xl px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{book.notes.map((note, index) => (
						<NoteCard key={index} note={note} />
					))}
				</div>
			</div>
		</div>
	);
}
