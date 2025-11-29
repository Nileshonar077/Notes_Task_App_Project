import React from "react";

const StatusFilter = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ marginBottom: "15px", marginLeft: "10px" }}
    >
      <option value="">All</option>
      <option value="OPEN">Open</option>
      <option value="IN_PROGRESS">In Progress</option>
      <option value="DONE">Done</option>
    </select>
  );
};

export default StatusFilter;
