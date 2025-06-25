import { Book, addNote } from "../../types/models";

const theCultureCode = new Book({
	slug: "the-culture-code",
	title: "The Culture Code",
	author: "Daniel Coyle",
	tags: ["Culture", "Leadership", "Teamwork"],
	status: "In Progress",
	coverImage: "/public/covers/the-culture-code.jpg",
	notes: [
		addNote({
			chapter: "Introduction",
			keyInsight:
				"Culture is the hidden force that shapes behavior and performance.",
			supportingConcepts: ["Safety", "Vulnerability", "Purpose"],
			quote: "Culture is not a set of rules, but a set of behaviors.",
			whyItMatters:
				"Understanding culture helps leaders create environments where teams can thrive.",
			talkingPoints: [
				"Importance of safety in teams",
				"Role of vulnerability in leadership",
			],
			action:
				"Reflect on your team's culture and identify areas for improvement.",
		}),
	],
});

export default theCultureCode;
