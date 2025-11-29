import React, { useEffect, useState } from "react";
import {
  fetchTasks,
  createTask,
  updateTaskStatus,
} from "../api/tasksApi";

import SearchBar from "../components/SearchBar";
import StatusFilter from "../components/StatusFilter";
import Pagination from "../components/Pagination";
import TaskTable from "../components/TaskTable";
import NewTaskForm from "../components/NewTaskForm";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  const [limit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const res = await fetchTasks({ q, status, limit, offset });
      setTasks(res.data.data);
      setTotal(res.data.meta.total);
    } catch (err) {
      console.error(err);
      alert("Error loading tasks");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadTasks();
  }, [offset, status]);

  const handleSearch = () => {
    setOffset(0);
    loadTasks();
  };

  const handleCreateTask = async (data) => {
    await createTask(data);
    loadTasks();
  };

  const handleAdvanceStatus = async (taskId, newStatus) => {
    await updateTaskStatus(taskId, newStatus);
    loadTasks();
  };

  return (
    <div className="container">
      <h1>Tasks Manager</h1>

      <div className="top-controls">
        <SearchBar value={q} onChange={setQ} onSearch={handleSearch} />
        <StatusFilter value={status} onChange={setStatus} />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <TaskTable tasks={tasks} onAdvanceStatus={handleAdvanceStatus} />
      )}

      <Pagination
        offset={offset}
        limit={limit}
        total={total}
        onPrev={() => setOffset(Math.max(0, offset - limit))}
        onNext={() => setOffset(offset + limit)}
      />

      <NewTaskForm onSubmit={handleCreateTask} />
    </div>
  );
};

export default TasksPage;
