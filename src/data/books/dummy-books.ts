import { Book, addNote } from "../../types/models";

export const dummyBook1 = new Book({
	slug: "test-book-one",
	title: "Test Book One: A Dummy Novel",
	author: "Test Author Smith",
	tags: ["Test", "Fiction", "Dummy"],
	status: "Completed",
	coverImage: "/covers/test-book.jpg",
	notes: [
		addNote({
			chapter: "Chapter 1: Introduction",
			keyInsight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			supportingConcepts: ["Test Concept 1", "Test Concept 2"],
			quote:
				"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			whyItMatters:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
			talkingPoints: ["Point 1", "Point 2", "Point 3"],
			action: "Implement test action 1",
		}),
		addNote({
			chapter: "Chapter 2: Development",
			keyInsight: "Duis aute irure dolor in reprehenderit in voluptate velit.",
			supportingConcepts: ["Test Concept 3", "Test Concept 4"],
			quote: "Excepteur sint occaecat cupidatat non proident.",
			whyItMatters:
				"Sunt in culpa qui officia deserunt mollit anim id est laborum.",
			talkingPoints: ["Point 4", "Point 5", "Point 6"],
			action: "Review test materials",
		}),
		addNote({
			chapter: "Chapter 3: Testing",
			keyInsight: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
			quote: "Neque porro quisquam est, qui dolorem ipsum quia dolor.",
			whyItMatters:
				"Quis autem vel eum iure reprehenderit qui in ea voluptate.",
			action: "Complete test phase",
		}),
		addNote({
			chapter: "Chapter 4: Implementation",
			keyInsight: "At vero eos et accusamus et iusto odio dignissimos.",
			supportingConcepts: ["Test Concept 5", "Test Concept 6"],
			quote: "Et harum quidem rerum facilis est et expedita distinctio.",
			talkingPoints: ["Point 7", "Point 8"],
		}),
		addNote({
			chapter: "Chapter 5: Review",
			keyInsight: "Nam libero tempore, cum soluta nobis est eligendi optio.",
			quote: "Temporibus autem quibusdam et aut officiis debitis.",
			whyItMatters: "Itaque earum rerum hic tenetur a sapiente delectus.",
		}),
		addNote({
			chapter: "Chapter 6: Conclusion",
			keyInsight: "In a free hour, when our power of choice is untrammeled.",
			supportingConcepts: ["Final Concept 1", "Final Concept 2"],
			quote:
				"These matters to this principle of selection: he rejects pleasures.",
			action: "Plan next steps",
		}),
	],
});

export const dummyBook2 = new Book({
	slug: "test-book-two",
	title: "Test Book Two: More Dummy Content",
	author: "Test Author Smith", // Same author as Book One
	tags: ["Test", "Non-Fiction", "Dummy"],
	status: "In Progress",
	coverImage: "/covers/test-book.jpg",
	notes: [
		addNote({
			chapter: "Part 1: Beginning",
			keyInsight: "Sed ut perspiciatis unde omnis iste natus error sit.",
			supportingConcepts: ["Concept A", "Concept B"],
			quote: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
			action: "Review concepts",
		}),
		addNote({
			chapter: "Part 2: Middle Section",
			keyInsight: "Neque porro quisquam est, qui dolorem ipsum quia dolor.",
			quote: "Ut enim ad minima veniam, quis nostrum exercitationem.",
			whyItMatters: "Quis autem vel eum iure reprehenderit.",
		}),
		addNote({
			chapter: "Part 3: Advanced Topics",
			keyInsight: "Nam libero tempore, cum soluta nobis est eligendi.",
			supportingConcepts: ["Concept C", "Concept D"],
			talkingPoints: ["Discussion 1", "Discussion 2"],
		}),
		addNote({
			chapter: "Part 4: Implementation",
			keyInsight: "Et harum quidem rerum facilis est et expedita.",
			quote: "Temporibus autem quibusdam et aut officiis debitis.",
			action: "Implement key findings",
		}),
		addNote({
			chapter: "Part 5: Case Studies",
			keyInsight: "Itaque earum rerum hic tenetur a sapiente delectus.",
			supportingConcepts: ["Case Study 1", "Case Study 2"],
			whyItMatters: "To understand practical applications",
		}),
		addNote({
			chapter: "Part 6: Conclusion",
			keyInsight: "On the other hand, we denounce with righteous indignation.",
			quote: "These cases are perfectly simple and easy to distinguish.",
			action: "Summarize findings",
		}),
		addNote({
			chapter: "Part 7: Extended Topics",
			keyInsight: "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
			supportingConcepts: ["Extended A", "Extended B"],
			quote: "Maecenas tristique, est et tempus semper.",
			action: "Review extended concepts",
		}),
		addNote({
			chapter: "Part 8: Additional Studies",
			keyInsight: "In sagittis dui vel nisl. Duis ac nibh.",
			quote: "Fusce lacus purus, aliquet at, feugiat non, pretium quis.",
			whyItMatters: "Essential for comprehensive understanding",
		}),
		addNote({
			chapter: "Part 9: Practical Examples",
			keyInsight: "Vestibulum sed magna at nunc commodo placerat.",
			supportingConcepts: ["Practice Example 1", "Practice Example 2"],
			talkingPoints: ["Example Discussion 1", "Example Discussion 2"],
		}),
		addNote({
			chapter: "Part 10: Real-World Applications",
			keyInsight: "Proin eu mi. Nulla ac enim.",
			quote: "In tempor, turpis nec euismod scelerisque.",
			action: "Apply to real scenarios",
		}),
		addNote({
			chapter: "Part 11: Future Implications",
			keyInsight: "Morbi non quam nec dui luctus rutrum.",
			supportingConcepts: ["Future Trend 1", "Future Trend 2"],
			whyItMatters: "Important for long-term planning",
		}),
		addNote({
			chapter: "Part 12: Integration Strategies",
			keyInsight: "Nunc purus. Phasellus in felis.",
			quote: "Donec semper sapien a libero. Nam dui.",
			talkingPoints: ["Integration Point 1", "Integration Point 2"],
		}),
		addNote({
			chapter: "Part 13: Advanced Patterns",
			keyInsight: "Suspendisse potenti. In eleifend quam a odio.",
			supportingConcepts: ["Pattern A", "Pattern B"],
			action: "Study advanced patterns",
		}),
		addNote({
			chapter: "Part 14: Best Practices",
			keyInsight: "Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
			quote: "Nulla neque libero, convallis eget, eleifend luctus.",
			whyItMatters: "Critical for professional implementation",
		}),
		addNote({
			chapter: "Part 15: Synthesis",
			keyInsight: "Vivamus vestibulum sagittis sapien. Cum sociis natoque.",
			supportingConcepts: ["Final Pattern 1", "Final Pattern 2"],
			talkingPoints: ["Synthesis Point 1", "Synthesis Point 2"],
			action: "Complete synthesis review",
		}),
	],
});

export const dummyBook3 = new Book({
	slug: "test-book-three",
	title: "Mock Data: A Test Journey",
	author: "Sample Writer Jones",
	tags: ["Test", "Biography", "Dummy"],
	status: "Not Started",
	coverImage: "/covers/test-book.jpg",
	notes: [
		addNote({
			chapter: "Introduction to Testing",
			keyInsight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			supportingConcepts: ["Mock Test 1", "Mock Test 2"],
			quote: "Nullam non metus ultricies, sagittis nunc at, viverra risus.",
		}),
		addNote({
			chapter: "Testing Fundamentals",
			keyInsight: "Praesent euismod nisi vel sapien bibendum consequat.",
			quote: "Vestibulum ante ipsum primis in faucibus orci luctus.",
			action: "Practice fundamentals",
		}),
		addNote({
			chapter: "Advanced Testing",
			keyInsight: "Cras in purus eu magna vulputate luctus.",
			supportingConcepts: ["Advanced Topic 1", "Advanced Topic 2"],
			whyItMatters: "Crucial for understanding complex systems",
		}),
		addNote({
			chapter: "Mock Implementations",
			keyInsight: "Fusce consequat nulla nisl, nec hendrerit risus.",
			quote: "Nunc ac mattis orci. Ut vel ex eu purus ornare dignissim.",
		}),
		addNote({
			chapter: "Test Analysis",
			keyInsight: "Vivamus in felis eu sapien cursus vestibulum.",
			supportingConcepts: ["Analysis Method 1", "Analysis Method 2"],
			action: "Complete analysis",
		}),
		addNote({
			chapter: "Future of Testing",
			keyInsight: "Proin at turpis a pede posuere nonummy.",
			quote: "Integer aliquet, massa id lobortis convallis.",
			whyItMatters: "Important for future developments",
		}),
		addNote({
			chapter: "Advanced Concepts",
			keyInsight: "Pellentesque ultrices mattis odio. Donec vitae nisi.",
			supportingConcepts: ["Advanced Concept 1", "Advanced Concept 2"],
			quote: "Nam ultrices, libero non mattis pulvinar.",
			action: "Study advanced concepts",
		}),
		addNote({
			chapter: "Implementation Strategies",
			keyInsight: "Integer ac leo. Pellentesque ultrices mattis odio.",
			quote: "Morbi non quam nec dui luctus rutrum.",
			whyItMatters: "Critical for successful implementation",
		}),
		addNote({
			chapter: "Best Practices Review",
			keyInsight: "Aenean sit amet justo. Morbi ut odio.",
			supportingConcepts: ["Practice 1", "Practice 2"],
			talkingPoints: ["Key Practice 1", "Key Practice 2"],
		}),
		addNote({
			chapter: "Integration Methods",
			keyInsight: "Curabitur gravida nisi at nibh. In hac habitasse platea.",
			quote: "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
			action: "Implement integration methods",
		}),
		addNote({
			chapter: "Practical Applications",
			keyInsight: "Nulla suscipit ligula in lacus. Curabitur at ipsum ac.",
			supportingConcepts: ["Application 1", "Application 2"],
			whyItMatters: "Essential for real-world use",
		}),
		addNote({
			chapter: "Extended Examples",
			keyInsight: "Vestibulum ac est lacinia nisi venenatis tristique.",
			quote: "Fusce posuere felis sed lacus. Morbi sem mauris.",
			talkingPoints: ["Example 1", "Example 2"],
		}),
		addNote({
			chapter: "Advanced Patterns",
			keyInsight: "In hac habitasse platea dictumst. Etiam faucibus cursus.",
			supportingConcepts: ["Pattern X", "Pattern Y"],
			action: "Review advanced patterns",
		}),
		addNote({
			chapter: "System Integration",
			keyInsight: "Nulla facilisi. Cras non velit nec nisi vulputate.",
			quote: "Vestibulum ante ipsum primis in faucibus orci luctus.",
			whyItMatters: "Important for system cohesion",
		}),
		addNote({
			chapter: "Performance Optimization",
			keyInsight: "Maecenas tristique, est et tempus semper, est quam.",
			supportingConcepts: ["Optimization 1", "Optimization 2"],
			talkingPoints: ["Performance Point 1", "Performance Point 2"],
		}),
		addNote({
			chapter: "Security Considerations",
			keyInsight: "Proin eu mi. Nulla ac enim. In tempor, turpis nec.",
			quote: "Integer pede justo, lacinia eget, tincidunt eget, tempus vel.",
			action: "Implement security measures",
		}),
		addNote({
			chapter: "Maintenance Strategies",
			keyInsight: "Fusce consequat. Nulla nisl. Nunc nisl.",
			supportingConcepts: ["Maintenance A", "Maintenance B"],
			whyItMatters: "Critical for long-term success",
		}),
		addNote({
			chapter: "Final Integration",
			keyInsight: "In congue. Etiam justo. Etiam pretium iaculis justo.",
			quote: "Suspendisse potenti. Nullam porttitor lacus at turpis.",
			talkingPoints: ["Integration Summary 1", "Integration Summary 2"],
			action: "Complete final integration",
		}),
	],
});

export const dummyBook4 = new Book({
	slug: "test-book-four",
	title: "Sample Text: The Test Collection",
	author: "Example Name Wilson",
	tags: ["Test", "Poetry", "Dummy"],
	status: "In Progress",
	coverImage: "/covers/test-book.jpg",
	notes: [
		addNote({
			chapter: "Sample Chapter One",
			keyInsight: "Vestibulum ac est lacinia nisi venenatis tristique.",
			quote:
				"Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl.",
		}),
		addNote({
			chapter: "Sample Chapter Two",
			keyInsight: "Maecenas tincidunt lacus at velit.",
			supportingConcepts: ["Sample A", "Sample B"],
			action: "Review samples",
		}),
		addNote({
			chapter: "Sample Chapter Three",
			keyInsight: "Donec dapibus. Duis at velit eu est congue elementum.",
			quote: "In hac habitasse platea dictumst.",
			whyItMatters: "Essential for understanding samples",
		}),
		addNote({
			chapter: "Sample Chapter Four",
			keyInsight: "Curabitur in libero ut massa volutpat convallis.",
			supportingConcepts: ["Example 1", "Example 2"],
			talkingPoints: ["Sample Point 1", "Sample Point 2"],
		}),
		addNote({
			chapter: "Sample Chapter Five",
			keyInsight: "Morbi non quam nec dui luctus rutrum.",
			quote: "Nulla tellus. In sagittis dui vel nisl.",
			action: "Implement samples",
		}),
		addNote({
			chapter: "Sample Chapter Six",
			keyInsight: "Aenean lectus. Pellentesque eget nunc.",
			whyItMatters: "Completes the sample collection",
			talkingPoints: ["Final Point 1", "Final Point 2"],
		}),
	],
});

export const dummyBook5 = new Book({
	slug: "test-book-five",
	title: "Testing 123: A Dummy Guide",
	author: "Mock Author Brown",
	tags: ["Test", "Education", "Dummy"],
	status: "Completed",
	coverImage: "/covers/test-book.jpg",
	notes: [
		addNote({
			chapter: "Test Lesson 1",
			keyInsight: "Duis bibendum, felis sed interdum venenatis.",
			quote: "Turpis enim blandit mi, in porttitor pede justo eu massa.",
		}),
		addNote({
			chapter: "Test Lesson 2",
			keyInsight: "Morbi porttitor lorem id ligula.",
			supportingConcepts: ["Lesson A", "Lesson B"],
			action: "Practice lessons",
		}),
		addNote({
			chapter: "Test Lesson 3",
			keyInsight: "Suspendisse ornare consequat lectus.",
			quote: "In est risus, auctor sed, tristique in, tempus sit amet.",
			whyItMatters: "Key to understanding test concepts",
		}),
		addNote({
			chapter: "Test Lesson 4",
			keyInsight: "Maecenas rhoncus aliquam lacus.",
			supportingConcepts: ["Practice 1", "Practice 2"],
			talkingPoints: ["Learning Point 1", "Learning Point 2"],
		}),
		addNote({
			chapter: "Test Lesson 5",
			keyInsight: "Vestibulum sed magna at nunc commodo placerat.",
			quote: "Praesent lectus. Vestibulum quam sapien.",
			action: "Complete exercises",
		}),
		addNote({
			chapter: "Test Lesson 6",
			keyInsight: "Integer pede justo, lacinia eget, tincidunt eget.",
			whyItMatters: "Finalizes test concepts",
			talkingPoints: ["Summary Point 1", "Summary Point 2"],
		}),
	],
});

export const dummyBook6 = new Book({
	slug: "test-book-six",
	title: "Example Book: Mock Data Collection",
	author: "Example Name Wilson", // Same author as Book Four
	tags: ["Test", "Reference", "Dummy"],
	status: "Not Started",
	coverImage: "/covers/test-book.jpg",
	notes: [
		addNote({
			chapter: "Mock Section 1",
			keyInsight: "Nulla neque libero, convallis eget, eleifend luctus.",
			quote: "Morbi quis tortor id nulla ultrices aliquet.",
		}),
		addNote({
			chapter: "Mock Section 2",
			keyInsight: "Vestibulum ante ipsum primis in faucibus.",
			supportingConcepts: ["Mock A", "Mock B"],
			action: "Review mocks",
		}),
		addNote({
			chapter: "Mock Section 3",
			keyInsight: "Duis consequat dui nec nisi volutpat eleifend.",
			quote: "Donec ut mauris eget massa tempor convallis.",
			whyItMatters: "Essential for mock testing",
		}),
		addNote({
			chapter: "Mock Section 4",
			keyInsight: "Cras mi pede, malesuada in, imperdiet et.",
			supportingConcepts: ["Example Test 1", "Example Test 2"],
			talkingPoints: ["Mock Point 1", "Mock Point 2"],
		}),
		addNote({
			chapter: "Mock Section 5",
			keyInsight: "In tempor, turpis nec euismod scelerisque.",
			quote: "Quam turpis adipiscing lorem, vitae mattis nibh.",
			action: "Complete mock tests",
		}),
		addNote({
			chapter: "Mock Section 6",
			keyInsight: "Etiam vel augue. Vestibulum rutrum rutrum neque.",
			whyItMatters: "Completes the mock collection",
			talkingPoints: ["Conclusion 1", "Conclusion 2"],
		}),
	],
});
