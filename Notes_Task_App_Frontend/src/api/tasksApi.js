import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchTasks = (params) =>
  API.get("/tasks", { params });

export const createTask = (data) =>
  API.post("/tasks", data);

export const updateTaskStatus = (taskId, status) =>
  API.patch(`/tasks/${taskId}/status`, { status });
