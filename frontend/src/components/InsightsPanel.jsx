// src/components/InsightsPanel.jsx
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

function InsightsPanel() {
  const [insights, setInsights] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/insights`);
        const data = await response.json();
        setInsights(data);
      } catch (err) {
        console.error("Error fetching insights:", err);
        setError("Failed to load insights.");
      }
    };

    fetchInsights();
  }, []);

  if (error) {
    return (
      <div className="p-4 border rounded bg-red-100 text-red-800">{error}</div>
    );
  }

  if (!insights) {
    return (
      <div className="p-4 border rounded bg-gray-100">Loading insights...</div>
    );
  }

  return (
    <div className="p-4 border rounded bg-green-50 mt-4">
      <h3>📊 Smart Insights</h3>
      <p>
        <strong>Summary:</strong> {insights.summary}
      </p>

      <div style={{ marginTop: "10px" }}>
        <p>🟢 Open Tasks: {insights.openTasks}</p>
        <p>🔵 Tasks Due Soon: {insights.dueSoon}</p>

        <h4>Priority Breakdown:</h4>
        <ul>
          {insights.priorityCounts &&
            Object.entries(insights.priorityCounts).map(([priority, count]) => (
              <li key={priority}>
                {priority}: {count}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default InsightsPanel;
