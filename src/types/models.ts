export class Note {
	chapter: string;
	keyInsight: string;
	supportingConcepts?: string[];
	quote?: string;
	codeSnippet?: string;
	whyItMatters?: string;
	talkingPoints?: string[];
	action?: string;

	constructor(
		chapter: string,
		keyInsight: string,
		supportingConcepts?: string[],
		quote?: string,
		codeSnippet?: string,
		whyItMatters?: string,
		talkingPoints?: string[],
		action?: string
	) {
		this.chapter = chapter;
		this.keyInsight = keyInsight;
		this.supportingConcepts = supportingConcepts;
		this.quote = quote;
		this.codeSnippet = codeSnippet;
		this.whyItMatters = whyItMatters;
		this.talkingPoints = talkingPoints;
		this.action = action;
	}

	getSummary(): string {
		return `${this.chapter}: ${this.keyInsight}`;
	}
}

export type BookStatus = "Completed" | "In Progress" | "Not Started";

export class Book {
	title: string;
	author: string;
	genre?: string;
	tags?: string[];
	status: BookStatus;
	notes: Note[];
	coverImage?: string;

	constructor(
		title: string,
		author: string,
		genre?: string,
		tags?: string[],
		status: BookStatus = "Not Started",
		notes: Note[] = [],
		coverImage?: string
	) {
		this.title = title;
		this.author = author;
		this.genre = genre;
		this.tags = tags;
		this.status = status;
		this.notes = notes;
		this.coverImage = coverImage;
	}

	getChapterList(): string[] {
		return this.notes.map((note) => note.chapter);
	}

	getTags(): string[] {
		return this.tags || [];
	}

	getNotesWithAction(): Note[] {
		return this.notes.filter(
			(note) => note.action !== undefined && note.action.trim() !== ""
		);
	}
}
