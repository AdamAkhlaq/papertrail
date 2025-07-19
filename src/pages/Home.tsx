import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function Home() {
	const [search, setSearch] = useState("");

	return (
		<div className="flex items-center justify-center h-[25vh]">
			<SearchBar
				value={search}
				placeholder="Search books by title or author"
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
}
