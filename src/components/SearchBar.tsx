import React, {
	useEffect,
	useState,
	useCallback,
	useMemo,
	useRef,
} from "react";
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
	const [currentSuggestion, setCurrentSuggestion] = useState<string>("");
	const inputRef = useRef<HTMLInputElement>(null);

	// Get all unique tags from books
	const allTags = useMemo(() => {
		const tagSet = new Set<string>();
		books.forEach((book) => {
			book.tags?.forEach((tag) => tagSet.add(tag));
		});
		return Array.from(tagSet).sort();
	}, []);

	// Get the current tag being typed
	const getCurrentTagInput = useCallback((input: string) => {
		const tagMatch = input.match(/tags?:(.*?)$/);
		if (!tagMatch) return "";

		const fullTagString = tagMatch[1];
		const tags = fullTagString.split(",");
		const currentTag = tags[tags.length - 1].toLowerCase().trim();
		return currentTag;
	}, []);

	// Get suggestion for current input
	const getSuggestion = useCallback(
		(input: string) => {
			const currentTag = getCurrentTagInput(input);
			if (!currentTag) return "";

			// Filter out already used tags
			const usedTags =
				input
					.match(/tags?:(.*?)$/)?.[1]
					.split(",")
					.slice(0, -1)
					.map((tag) => tag.trim().toLowerCase()) || [];

			const suggestion = allTags.find(
				(tag) =>
					tag.toLowerCase().startsWith(currentTag) &&
					!usedTags.includes(tag.toLowerCase())
			);

			return suggestion || "";
		},
		[allTags, getCurrentTagInput]
	);

	// Initialize Fuse instance
	const fuseInstance = useMemo(
		() =>
			new Fuse(books, {
				keys: [
					{ name: "title", weight: 1 },
					{ name: "author", weight: 1 },
					{ name: "authorDetails.firstName", weight: 0.7 },
					{ name: "authorDetails.lastName", weight: 0.7 },
					{ name: "tags", weight: 0.8 },
				],
				threshold: 0.4,
				ignoreLocation: true,
				useExtendedSearch: true,
				distance: 100,
				findAllMatches: true,
			}),
		[]
	);

	// Complete the current tag with suggestion
	const completeTag = useCallback(() => {
		if (!currentSuggestion) return;

		const beforeTag = value.match(/(.*tags?:.*,\s*|.*tags?:)/)?.[0] || "";
		const afterTag = value.slice(beforeTag.length);
		const remainingQuery = afterTag.includes(",")
			? afterTag.slice(afterTag.indexOf(","))
			: "";
		const newValue = beforeTag + currentSuggestion + remainingQuery;

		onChange({
			target: { value: newValue },
		} as React.ChangeEvent<HTMLInputElement>);
		setCurrentSuggestion("");
	}, [value, onChange, currentSuggestion]);

	const debouncedSearch = useCallback(
		(searchTerm: string) => {
			if (searchTerm.trim() === "" || searchTerm.trim().match(/^tags?:$/)) {
				setSearchResults([]);
				return;
			}

			// Check for tag: or tags: prefix
			const tagMatch = searchTerm.match(/tags?:([^(\s|$)]*)/);
			let results: Book[] = [];

			if (tagMatch) {
				const tagQuery = tagMatch[1].toLowerCase();

				// If there's no tag text after "tag:" or "tags:", return no results
				if (!tagQuery) {
					setSearchResults([]);
					return;
				}

				// Split tags by comma and trim whitespace
				const tags = tagQuery
					.split(",")
					.map((tag) => tag.trim())
					.filter((tag) => tag !== "");

				// If no valid tags after splitting, return no results
				if (tags.length === 0) {
					setSearchResults([]);
					return;
				}

				const otherTerms = searchTerm.replace(/tags?:[^(\s|$)]+/, "").trim();

				// Filter books that have ALL the specified tags
				const booksWithTags = books.filter((book) =>
					tags.every((searchTag) =>
						book.tags?.some(
							(bookTag) => bookTag.toLowerCase() === searchTag.toLowerCase()
						)
					)
				);

				// If there are other search terms, search within tagged books
				if (otherTerms) {
					const taggedFuse = new Fuse(booksWithTags, {
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
					});
					results = taggedFuse.search(otherTerms).map((result) => result.item);
				} else {
					// If no other terms, just return the tag-filtered books
					results = booksWithTags;
				}
			} else {
				// Regular search without tag
				results = fuseInstance.search(searchTerm).map((result) => result.item);
			}

			setSearchResults(results);
		},
		[fuseInstance]
	);

	// Update suggestion when input changes
	useEffect(() => {
		if (value.includes("tag:") || value.includes("tags:")) {
			const suggestion = getSuggestion(value);
			setCurrentSuggestion(suggestion);
		} else {
			setCurrentSuggestion("");
		}
	}, [value, getSuggestion]);

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
			<div className="relative">
				<input
					ref={inputRef}
					type="text"
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					onKeyDown={(e) => {
						if (e.key === "Tab" && currentSuggestion) {
							e.preventDefault();
							completeTag();
						} else if (e.key === "Enter" && onEnter) {
							onEnter();
						}
					}}
					className="w-full pl-10 px-4 py-2 rounded-full border border-gray-300 shadow focus:outline-none"
				/>
				{currentSuggestion && (
					<div
						className="absolute inset-0 pointer-events-none"
						style={{
							display: "flex",
							alignItems: "center",
							paddingLeft: "2.5rem",
							paddingRight: "1rem",
						}}
					>
						<span className="opacity-0">{value}</span>
						<span className="text-gray-300 whitespace-pre">
							{currentSuggestion.slice(getCurrentTagInput(value).length)}
						</span>
					</div>
				)}
			</div>

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
