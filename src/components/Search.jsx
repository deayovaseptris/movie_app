import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term); 
  };

  const handleReset = () => {
    setTerm("");
    onSearch("batman"); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ textAlign: "center", margin: "20px" }}
    >
      <input
        type="text"
        value={term}
        onChange={handleInputChange}
        placeholder="Search movies..."
        style={{ padding: "10px", width: "300px" }}
      />
      <button
        type="submit"
        style={{ padding: "10px 20px", marginLeft: "10px" }}
      >
        Search
      </button>
      <button
        type="button"
        onClick={handleReset}
        style={{ padding: "10px 20px", marginLeft: "10px" }}
      >
        Reset
      </button>
    </form>
  );
};

export default Search;
