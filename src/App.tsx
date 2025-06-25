import "./App.css";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/books/:slug" element={<BookPage />} />
			<Route path="*" element={<div>404 Not Found</div>} />
		</Routes>
	);
}

export default App;
