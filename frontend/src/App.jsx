// src/App.jsx
import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import InsightsPanel from "./components/InsightsPanel";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📝 Task Tracker</h1>
      <TaskForm />
      <TaskList />
      <InsightsPanel />
    </div>
  );
}

export default App;
