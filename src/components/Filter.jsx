import React from "react";
import "./SearchBar.css";

const Filter = ({ filter }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={filter}
      />
    </div>
  );
};

export default Filter;
