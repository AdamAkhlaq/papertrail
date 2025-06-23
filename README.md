# 📘 papertrail

> A structured, searchable, and developer-friendly archive of insights and notes from books — built with TypeScript and React.

---

## ✨ Overview

**papertrail** is a personal knowledge base for book lovers and lifelong learners. It lets you store, tag, and explore insights from the books you read, with a clean developer-oriented interface and a programmatic data model.

Whether you're reading about leadership, personal finance, software engineering, or psychology — this app helps you retain what matters.

---

## 📐 Features

- 📚 Programmatic book & note schema using TypeScript classes
- 🔍 Full-text search by title, author, tags, and chapters (Fuse.js)
- 🧠 Structured insights with actionable takeaways
- 🌘 Collapsible markdown-style UI for readability
- 🏷️ Filterable tags across all books
- ⚡ Blazing-fast frontend with React + Vite
- 🎨 Clean, minimalist UI with Tailwind CSS

---

## 🛠️ Tech Stack

| Layer        | Stack                    |
|--------------|--------------------------|
| Frontend     | React, Vite              |
| Styling      | Tailwind CSS             |
| State & Routes | React Router           |
| Data         | Local TypeScript modules |
| Search       | Fuse.js                  |
| Hosting      | Vercel or Netlify        |

---

## 📁 Project Structure

```bash
papertrail/
├── public/
│   └── social-preview.png
├── src/
│   ├── components/
│   ├── data/             # Book note files (TS-based)
│   ├── pages/
│   ├── types/            # Book & Note classes
│   └── utils/
├── .gitignore
├── README.md
```

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/adamakhlaq/papertrail.git
cd papertrail

# Install dependencies
npm install

# Start dev server
npm run dev
```

## 📌 Example Book Entry

```bash
    TODO: Add example
```

## 📢 License

MIT — free to use, fork, or build on.
