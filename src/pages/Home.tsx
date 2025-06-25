import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../data/books";

export default function Home() {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const handleEnter = () => {
		const match = books.find((b) => b.slug === search.trim());
		if (match) {
			navigate(`/books/${search.trim()}`);
		}
	};

	return (
		<div className="flex items-center justify-center h-[25vh]">
			<SearchBar
				value={search}
				placeholder="Search Books"
				onChange={(e) => setSearch(e.target.value)}
				onEnter={handleEnter}
			/>
		</div>
	);
}
