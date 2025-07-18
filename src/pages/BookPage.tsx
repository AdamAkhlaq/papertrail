import { useParams } from "react-router-dom";
import { books } from "../data/books";
import { BookMetadata } from "../components/BookMetadata";

export default function BookPage() {
	const { slug } = useParams();
	const book = books.find((b) => b.slug === slug);
	if (!book) {
		return <div>Book not found</div>;
	}

	return (
		<div className="flex flex-col items-center justify-center ">
			<BookMetadata book={book} />
		</div>
	);
}
