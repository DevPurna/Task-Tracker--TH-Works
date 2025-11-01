const express = require("express");
const router = express.Router();
const db = require("../db/db");

// helper - returns YYYY-MM-DD
function getDatePlusDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
}

// GET /insights
router.get("/", (req, res) => {
  try {
    const openTasks = db
      .prepare("SELECT COUNT(*) as count FROM tasks WHERE status = 'Open'")
      .get().count;

    const priorities = db
      .prepare(
        "SELECT priority, COUNT(*) as count FROM tasks GROUP BY priority"
      )
      .all();

    const today = new Date().toISOString().split("T")[0];
    const next3 = getDatePlusDays(3);
    const dueSoon = db
      .prepare(
        "SELECT COUNT(*) as count FROM tasks WHERE due_date BETWEEN ? AND ?"
      )
      .get(today, next3).count;

    let summary = `Open tasks: ${openTasks}, Due soon: ${dueSoon}.`;

    if (priorities.length > 0) {
      const high = priorities.find((p) => p.priority === "High")?.count || 0;
      const total = priorities.reduce((a, b) => a + b.count, 0);
      const percent = total ? Math.round((high / total) * 100) : 0;

      if (percent > 50) {
        summary += ` Focus! ${percent}% are High Priority.`;
      } else {
        summary += ` Balanced load (${percent}% high priority).`;
      }
    }

    res.json({
      openTasks,
      dueSoon,
      priorityCounts: priorities,
      summary,
    });
  } catch (err) {
    console.error("insights error:", err);
    res.status(500).json({ message: "failed to get insights" });
  }
});

module.exports = router;
