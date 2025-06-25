import "./App.css";
import theCultureCode from "./data/books/the-culture-code";

function App() {
	return (
		<div>
			<h1>{theCultureCode.title}</h1>
			<h2>{theCultureCode.author}</h2>
			<p>{theCultureCode.status}</p>
			<p>{theCultureCode.getTags().join(", ")}</p>
			<p>
				{theCultureCode.getNotesWithAction().map((note, idx) => (
					<span key={idx}>
						Key Insight: {note.keyInsight}
						<br />
						Action: {note.action}
						<br />
					</span>
				))}
			</p>
		</div>
	);
}

export default App;
