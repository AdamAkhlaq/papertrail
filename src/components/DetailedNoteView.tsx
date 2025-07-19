import React from "react";
import { Note } from "../types/models";

interface DetailedNoteViewProps {
	note: Note;
}

export const DetailedNoteView: React.FC<DetailedNoteViewProps> = ({ note }) => {
	return (
		<div className="space-y-6">
			<h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
				{note.chapter}
			</h2>

			<div className="space-y-6 text-left">
				<div>
					<h3 className="text-lg font-semibold text-gray-700">Key Insight</h3>
					<p className="text-gray-600">{note.keyInsight}</p>
				</div>

				{note.supportingConcepts && note.supportingConcepts.length > 0 && (
					<div>
						<h3 className="text-lg font-semibold text-gray-700">
							Supporting Concepts
						</h3>
						<ul className="list-disc ml-5 text-gray-600">
							{note.supportingConcepts.map((concept, index) => (
								<li key={index}>{concept}</li>
							))}
						</ul>
					</div>
				)}

				{note.quote && (
					<div>
						<h3 className="text-lg font-semibold text-gray-700">Quote</h3>
						<blockquote className="pl-4 border-l-4 border-gray-300 italic text-gray-600">
							{note.quote}
						</blockquote>
					</div>
				)}

				{note.whyItMatters && (
					<div>
						<h3 className="text-lg font-semibold text-gray-700">
							Why It Matters
						</h3>
						<p className="text-gray-600">{note.whyItMatters}</p>
					</div>
				)}

				{note.talkingPoints && note.talkingPoints.length > 0 && (
					<div>
						<h3 className="text-lg font-semibold text-gray-700">
							Talking Points
						</h3>
						<ul className="list-disc ml-5 text-gray-600">
							{note.talkingPoints.map((point, index) => (
								<li key={index}>{point}</li>
							))}
						</ul>
					</div>
				)}

				{note.action && (
					<div>
						<h3 className="text-lg font-semibold text-gray-700">Action</h3>
						<p className="text-gray-600">{note.action}</p>
					</div>
				)}
			</div>
		</div>
	);
};
