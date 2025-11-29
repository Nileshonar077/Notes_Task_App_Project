import React, { useState } from "react";

const NewTaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    if (!title.trim()) return alert("Title is required");
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="new-task">
      <h3>Create New Task</h3>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <br /><br />

      <button onClick={handleCreate}>Add Task</button>
    </div>
  );
};

export default NewTaskForm;
