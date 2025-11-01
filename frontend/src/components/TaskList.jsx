// src/components/TaskList.jsx
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchTasks = async (query = "") => {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks${query}`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setTasks(data);
      } else if (data.tasks) {
        setTasks(data.tasks);
      } else {
        setTasks([]);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    fetchTasks(value ? `?status=${value}` : "");
  };

  return (
    <div>
      <h3>Task List</h3>

      <select onChange={handleFilterChange} value={filter}>
        <option value="">All</option>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="4">No tasks found</td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
                <td>{task.due_date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
