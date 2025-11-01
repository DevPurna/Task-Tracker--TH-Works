const db = require("../db/db");

// add new task
function addTask(data) {
  const { title, description, priority, due_date } = data;

  if (!title) throw new Error("Title is required");

  const stmt = db.prepare(`
    INSERT INTO tasks (title, description, priority, due_date)
    VALUES (?, ?, ?, ?)
  `);
  const info = stmt.run(title, description || "", priority || "Medium", due_date || null);
  return { id: info.lastInsertRowid, ...data };
}

// get all tasks
function getTasks(filters = {}) {
  let query = "SELECT * FROM tasks";
  let params = [];

  if (filters.status) {
    query += " WHERE status = ?";
    params.push(filters.status);
  }

  // TODO: add priority and sort filters
  const stmt = db.prepare(query);
  const rows = stmt.all(...params);

  return rows;
}

// update task
function updateTask(id, updates) {
  const fields = [];
  const values = [];

  if (updates.status) {
    fields.push("status = ?");
    values.push(updates.status);
  }

  if (updates.priority) {
    fields.push("priority = ?");
    values.push(updates.priority);
  }

  if (fields.length === 0) {
    console.warn("No fields to update");
    return false;
  }

  values.push(id);
  const stmt = db.prepare(`UPDATE tasks SET ${fields.join(", ")} WHERE id = ?`);
  const result = stmt.run(...values);
  return result.changes > 0;
}

module.exports = { addTask, getTasks, updateTask };
