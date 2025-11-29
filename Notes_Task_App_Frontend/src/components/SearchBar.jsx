import React from "react";

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search tasks…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </>
  );
};

export default SearchBar;
