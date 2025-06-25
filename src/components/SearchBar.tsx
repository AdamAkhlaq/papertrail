import React from "react";

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
		</div>
	);
};

export default SearchBar;
