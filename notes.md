## 🗂️ Database Choice
I chose **SQLite** for its simplicity and file-based structure. It does not require a separate server and is perfect for small projects and demos. The `better-sqlite3` package provides synchronous, fast, and easy-to-use SQL operations.

---

## 🧱 Schema Design
The `tasks` table includes:
- `id` (INTEGER, Primary Key, Auto Increment)
- `title` (TEXT, Required)
- `description` (TEXT)
- `priority` (TEXT: Low, Medium, High)
- `due_date` (TEXT)
- `status` (TEXT: Open, In Progress, Done)
- `created_at` (TEXT, defaults to current datetime)

This schema covers basic task management needs with minimal redundancy.

---

## 🔍 API & Architecture Decisions
I used a **modular architecture**:
- `/src/db/` handles database setup and connection.
- `/src/services/` performs SQL operations.
- `/src/routes/` defines clean REST APIs.

Each API is small, predictable, and easy to test individually.

---

## 🧠 Insights Logic
The `/insights` endpoint calculates:
- Count of open tasks
- Count by priority
- Count of tasks due within 3 days
- A rule-based summary string (e.g., highlighting workload if most open tasks are High priority)

This mimics an "AI-like" insight generator using simple data analysis rules.

---

## 💡 Frontend Design
I used **React (Vite)** for component-based organization:
- `TaskForm` handles new task creation.
- `TaskList` displays and filters tasks.
- `InsightsPanel` fetches and shows backend insights.

The UI is intentionally minimal and focuses on functionality rather than complex styling.

---

## ✅ Future Improvements
- Add delete and edit task features.
- Integrate local storage for offline mode.
- Add visual charts for insights.
