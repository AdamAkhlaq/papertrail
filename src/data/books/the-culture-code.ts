import { Book, addNote } from "../../types/models";

const theCultureCode = new Book({
	slug: "the-culture-code",
	title: "The Culture Code",
	author: "Daniel Coyle",
	tags: ["Culture", "Leadership", "Teamwork"],
	status: "In Progress",
	coverImage: "/covers/the-culture-code.jpg",
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
		addNote({
			chapter: "Chapter 1: The Good Apples",
			keyInsight:
				"Small, consistent signals of belonging dramatically improve team cohesion.",
			supportingConcepts: ["Belonging cues", "Group dynamics", "Trust"],
			quote:
				"Belonging cues are behaviors that create safe connections in groups.",
			whyItMatters:
				"Teams that foster belonging are more resilient and collaborative.",
			talkingPoints: [
				"Examples of belonging cues in high-performing teams",
				"How leaders can model belonging behaviors",
			],
			action:
				"Identify and practice belonging cues in your daily interactions with your team.",
		}),
		addNote({
			chapter: "Chapter 2: The Billion-Dollar Day When Nothing Happened",
			keyInsight:
				"Psychological safety is the foundation of successful group culture.",
			supportingConcepts: [
				"Psychological safety",
				"Mistake tolerance",
				"Learning",
			],
			quote:
				"Groups succeed not because they are smarter, but because they are safer.",
			whyItMatters:
				"People are more likely to share ideas and take risks when they feel safe.",
			talkingPoints: [
				"How psychological safety leads to innovation",
				"Examples from Google’s Project Aristotle",
			],
			action:
				"Encourage open dialogue and make it safe to admit mistakes in your team.",
		}),
		addNote({
			chapter: "Chapter 3: The Christmas Truce",
			keyInsight: "Vulnerability is a key driver of trust and cooperation.",
			supportingConcepts: ["Vulnerability loops", "Trust building", "Openness"],
			quote:
				"Vulnerability is not weakness; it’s the pathway to connection and trust.",
			whyItMatters:
				"Teams that embrace vulnerability are more cohesive and adaptable.",
			talkingPoints: [
				"How leaders can model vulnerability",
				"Stories of vulnerability loops in action",
			],
			action:
				"Share a personal challenge or mistake with your team to foster trust.",
		}),
		addNote({
			chapter: "Chapter 4: How to Build Purpose",
			keyInsight: "Clear, shared purpose aligns and motivates teams.",
			supportingConcepts: ["Purpose", "Mission", "Motivation"],
			quote: "Purpose is not a statement, but a set of actions and signals.",
			whyItMatters: "Purpose-driven teams are more engaged and persistent.",
			talkingPoints: [
				"How to communicate purpose through daily actions",
				"Examples of purpose-driven organizations",
			],
			action: "Clarify your team’s purpose and connect it to everyday work.",
		}),
		addNote({
			chapter: "Chapter 5: Ideas for Action",
			keyInsight:
				"Small, consistent habits reinforce culture more than grand gestures.",
			supportingConcepts: ["Habits", "Consistency", "Reinforcement"],
			quote:
				"Culture is built through a thousand small moments, not one big one.",
			whyItMatters: "Daily behaviors shape long-term culture and performance.",
			talkingPoints: [
				"Examples of effective cultural habits",
				"How to reinforce positive behaviors",
			],
			action:
				"Identify one small habit you can implement to strengthen your team’s culture.",
		}),
	],
});

export default theCultureCode;
