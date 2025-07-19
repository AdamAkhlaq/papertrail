import React from "react";
import { Book } from "../types/models";

interface BookMetadataProps {
	book: Book;
}

export const BookMetadata: React.FC<BookMetadataProps> = ({ book }) => {
	return (
		<div className="w-full bg-gray-100 p-8 rounded-lg shadow-lg">
			<div className="flex flex-col md:flex-row items-start min-h-[450px]">
				{book.coverImage && (
					<div className="flex-shrink-0 pl-24">
						<img
							src={book.coverImage}
							alt={`${book.title} book cover`}
							className="w-[300px] h-[450px] shadow-md"
						/>
					</div>
				)}
				<div className="flex flex-col items-center justify-center flex-grow h-[450px]">
					<div className="flex flex-col items-center space-y-5">
						<h1 className="text-4xl font-bold text-gray-900">{book.title}</h1>
						<h2 className="text-2xl text-gray-600">{book.author}</h2>

						<div className="flex flex-wrap justify-center gap-2">
							{book.tags?.map((tag) => (
								<span
									key={tag}
									className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
								>
									{tag}
								</span>
							))}
						</div>

						<span
							className={`px-4 py-2 rounded-full text-sm font-medium
							${
								book.status === "Completed"
									? "bg-green-100 text-green-800"
									: book.status === "In Progress"
									? "bg-yellow-100 text-yellow-800"
									: "bg-red-100 text-red-800"
							}`}
						>
							{book.status}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
