import { useParams } from "react-router-dom";
import { books } from "../data/books";

export default function BookPage() {
	const { slug } = useParams();
	const book = books.find((b) => b.slug === slug);
	if (!book) {
		return <div>Book not found</div>;
	}

	return (
		<div className="flex flex-col items-center justify-center ">
			<h1>{book.title}</h1>
			<h2>{book.author}</h2>
			<img src={book.coverImage} alt={`${book.title} cover`} />
			<p>Status: {book.status}</p>
			<br />
			<p>
				Notes:
				{book.getNotesWithAction().map((note, idx) => (
					<div key={idx} className="mb-2">
						<span>{note.keyInsight}</span>
						{note.action && (
							<>
								<br />
								<span className="text-red-600">Action: {note.action}</span>
							</>
						)}
					</div>
				))}
			</p>
		</div>
	);
}
