const express = require("express");
const router = express.Router();
const taskService = require("../services/task.service");

// POST - create new task
router.post("/", (req, res) => {
  try {
    const result = taskService.addTask(req.body);
    res.status(201).json(result);
  } catch (err) {
    console.error("error creating task:", err);
    res.status(400).json({ error: "could not create task" });
  }
});

// GET - get all tasks
router.get("/", (req, res) => {
  try {
    const tasks = taskService.getTasks(req.query);
    res.json(tasks);
  } catch (err) {
    console.error("fetch error:", err);
    res.status(500).json({ message: "error fetching tasks" });
  }
});

// PATCH - update task status/priority
router.patch("/:id", (req, res) => {
  try {
    const updated = taskService.updateTask(req.params.id, req.body);
    if (updated) {
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, message: "Task not found" });
    }
  } catch (err) {
    res.status(400).json({ message: "update failed" });
  }
});

module.exports = router;
