const Database = require("better-sqlite3");

// connecting to local DB (auto creates file)
let db;
try {
  db = new Database("task_tracker.db");
  console.log("DB connected");
} catch (err) {
  console.error("DB init error:", err);
}

// create tasks table if not exists
db.prepare(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    priority TEXT,
    due_date TEXT,
    status TEXT DEFAULT 'Open',
    created_at TEXT DEFAULT (datetime('now'))
  )
`).run();

console.log("✅ table ready (tasks)");

module.exports = db;
