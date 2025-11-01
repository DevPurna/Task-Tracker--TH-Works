const express = require("express");
const cors = require("cors");
const db = require("./src/db/db"); 
const taskRouter = require("./src/routes/tasks.router");
const insightsRouter = require('./src/routes/insights.routes')

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/tasks", taskRouter);
app.use('/insights', insightsRouter)

app.get("/", (req, res) => {
  res.send("Task Tracker Backend is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
