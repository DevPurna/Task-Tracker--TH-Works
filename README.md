# 📝 Task Tracker

A simple full-stack **Task Tracking** application built using **React (Vite)** for the frontend and **Node.js + Express** with **SQLite** for the backend.

This project allows users to create, view, update, and analyze tasks efficiently through a clean and interactive UI.

---

## 🚀 Features

- ➕ Create new tasks with title, description, priority, due date, and status.
- 📋 View all tasks in a table layout.
- 🔍 Filter and sort tasks by priority or status.
- 📊 Get **Smart Insights** summarizing your workload and upcoming deadlines.
- 💾 Data stored locally using a lightweight SQLite database.

---

## 🧩 Project Structure

```
task-tracker/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── services/
│   │   └── db/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
├── README.md
├── DECLARATION.md
└── notes.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup

1. Open a terminal and navigate to the `backend` folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node server.js
```

The backend will run at `http://localhost:3000`

### 2️⃣ Frontend Setup

1. Open a new terminal and navigate to the `frontend` folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the frontend application:

```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

⚠️ **Make sure the backend server is running before launching the frontend.**

---

## 🧠 API Endpoints

| Method | Endpoint     | Description                                                |
| ------ | ------------ | ---------------------------------------------------------- |
| POST   | `/tasks`     | Create a new task                                          |
| GET    | `/tasks`     | Get all tasks (supports filters: status, priority, sortBy) |
| PATCH  | `/tasks/:id` | Update task status or priority                             |
| GET    | `/insights`  | Get smart workload insights                                |

---

## 🧱 Database Schema (SQLite)

| Field       | Type                  | Description                     |
| ----------- | --------------------- | ------------------------------- |
| id          | INTEGER (Primary Key) | Auto-incremented task ID        |
| title       | TEXT                  | Task title                      |
| description | TEXT                  | Task description                |
| priority    | TEXT                  | 'Low' / 'Medium' / 'High'       |
| due_date    | TEXT                  | Task due date                   |
| status      | TEXT                  | 'Open' / 'In Progress' / 'Done' |
| created_at  | TEXT                  | Timestamp when task was created |

---

## 📦 Technologies Used

**Frontend**

- React (Vite)
- JavaScript (ES6)
- Fetch API
- HTML5, CSS3

**Backend**

- Node.js
- Express.js
- better-sqlite3 (for SQLite database)
- CORS middleware

---

## 🧠 Smart Insights

The `/insights` endpoint analyzes tasks and provides a summary of your workload, including:

- Total open tasks.
- Count of tasks by priority.
- Tasks due within the next 3 days.
- A natural-language summary like: "You have 7 open tasks, 5 of which are High priority. 3 tasks are due soon — focus on those first!"

This gives a simple AI-like productivity overview based on rules.

---

## 🧑‍💻 Developer Notes

- Designed with modular backend architecture (separate routes, services, and DB files).
- Chose SQLite for its simplicity — lightweight and file-based (no setup needed).
- Frontend built with reusable React components (TaskForm, TaskList, InsightsPanel).
- API connection handled via fetch() for clarity and minimal dependencies.

---

## 🧑‍🎓 Author & Submission Details

- **Developer:** Purna Ch
- **Date:** 31 October 2025
- **Submitted for:** Task Tracker Full Stack Project
- **Frontend URL:** http://localhost:5173
- **Backend URL:** http://localhost:3000

---

## 📄 License

This project is open-source and available for educational use. You may modify or expand it with proper attribution.

⭐ **Thank you for reviewing my project!**
