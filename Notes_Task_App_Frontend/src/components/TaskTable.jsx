import React from "react";

const TaskTable = ({ tasks, onAdvanceStatus }) => {
  const nextStatus = (status) => {
    if (status === "OPEN") return "IN_PROGRESS";
    if (status === "IN_PROGRESS") return "DONE";
    return null;
  };

  return (
    <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Created At</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => {
          const next = nextStatus(task.status);
          return (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description || "-"}</td>
              <td>{task.status}</td>
              <td>{new Date(task.created_at).toLocaleString()}</td>
              <td>
                {next ? (
                  <button onClick={() => onAdvanceStatus(task.id, next)}>
                    Mark {next}
                  </button>
                ) : (
                  "Completed"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TaskTable;
