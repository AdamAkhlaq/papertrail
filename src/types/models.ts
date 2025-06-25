export class Note {
	chapter: string;
	keyInsight: string;
	supportingConcepts?: string[];
	quote?: string;
	codeSnippet?: string;
	whyItMatters?: string;
	talkingPoints?: string[];
	action?: string;

	constructor(data: {
		chapter: string;
		keyInsight: string;
		supportingConcepts?: string[];
		quote?: string;
		codeSnippet?: string;
		whyItMatters?: string;
		talkingPoints?: string[];
		action?: string;
	}) {
		this.chapter = data.chapter;
		this.keyInsight = data.keyInsight;
		this.supportingConcepts = data.supportingConcepts;
		this.quote = data.quote;
		this.codeSnippet = data.codeSnippet;
		this.whyItMatters = data.whyItMatters;
		this.talkingPoints = data.talkingPoints;
		this.action = data.action;
	}

	getSummary(): string {
		return `${this.chapter}: ${this.keyInsight}`;
	}
}

export type BookStatus = "Completed" | "In Progress" | "Not Started";

export class Book {
	slug: string;
	title: string;
	author: string;
	genre?: string;
	tags?: string[];
	status: BookStatus;
	notes: Note[];
	coverImage?: string;

	constructor(data: {
		slug: string;
		title: string;
		author: string;
		genre?: string;
		tags?: string[];
		status: BookStatus;
		notes: Note[];
		coverImage?: string;
	}) {
		this.slug = data.slug;
		this.title = data.title;
		this.author = data.author;
		this.genre = data.genre;
		this.tags = data.tags;
		this.status = data.status;
		this.notes = data.notes;
		this.coverImage = data.coverImage;
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

export function addNote(data: ConstructorParameters<typeof Note>[0]): Note {
	return new Note(data);
}
