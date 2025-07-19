import React, { useState } from "react";
import { Note } from "../types/models";
import { Modal } from "./Modal";
import { DetailedNoteView } from "./DetailedNoteView";

interface NoteCardProps {
	note: Note;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<div className="bg-gray-100 p-6 rounded-lg shadow-lg h-40 relative">
				<h2 className="text-xl font-bold text-gray-800 mb-2">{note.chapter}</h2>
				<p className="text-gray-600 line-clamp-3">{note.keyInsight}</p>
				<button
					onClick={() => setIsModalOpen(true)}
					className="absolute bottom-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
					aria-label="Expand note"
				>
					<svg
						className="w-6 h-6 rotate-45"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<DetailedNoteView note={note} />
			</Modal>
		</>
	);
};
