import React, { useEffect, useState, useCallback } from "react";
import Fuse from "fuse.js";
import { Book } from "../types/models";
import { books } from "../data/books";

interface SearchBarProps {
	value: string;
	placeholder?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onEnter?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
	value,
	placeholder = "Book",
	onChange,
	onEnter,
}) => {
	const [searchResults, setSearchResults] = useState<Book[]>([]);
	const [fuse] = useState(
		() =>
			new Fuse(books, {
				keys: [
					{ name: "title", weight: 1 },
					{ name: "author", weight: 1 },
					{ name: "authorDetails.firstName", weight: 0.7 },
					{ name: "authorDetails.lastName", weight: 0.7 },
				],
				threshold: 0.4,
				ignoreLocation: true,
				useExtendedSearch: true,
				distance: 100,
				findAllMatches: true,
			})
	);

	const debouncedSearch = useCallback(
		(searchTerm: string) => {
			if (searchTerm.trim() === "") {
				setSearchResults([]);
				return;
			}

			const results = fuse.search(searchTerm);
			setSearchResults(results.map((result) => result.item));
		},
		[fuse]
	);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			debouncedSearch(value);
		}, 100); // 100ms delay

		return () => {
			clearTimeout(timeoutId);
		};
	}, [value, debouncedSearch]);

	return (
		<div className="relative w-1/2">
			<span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<svg
					className="w-5 h-5 text-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
						clipRule="evenodd"
					/>
				</svg>
			</span>
			<input
				type="text"
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				onKeyDown={(e) => {
					if (e.key === "Enter" && onEnter) {
						onEnter();
					}
				}}
				className="w-full pl-10 px-4 py-2 rounded-full border border-gray-300 shadow focus:outline-none"
			/>

			{searchResults.length > 0 && (
				<div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto z-50">
					{searchResults.map((book) => (
						<div
							key={book.slug}
							onClick={() => {
								window.location.href = `/books/${book.slug}`;
							}}
							className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
						>
							{book.coverImage && (
								<img
									src={book.coverImage}
									alt={`${book.title} cover`}
									className="w-10 h-14 shadow-sm"
								/>
							)}
							<div className="text-gray-800">
								{book.title}{" "}
								<span className="text-gray-600">by {book.author}</span>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchBar;
