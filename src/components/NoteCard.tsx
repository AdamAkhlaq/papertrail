import React from "react";
import { Note } from "../types/models";

interface NoteCardProps {
	note: Note;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
	return (
		<div className="bg-gray-100 p-6 rounded-lg shadow-lg h-40">
			<h2 className="text-xl font-bold text-gray-800 mb-2">{note.chapter}</h2>
			<p className="text-gray-600 line-clamp-3">{note.keyInsight}</p>
		</div>
	);
};
