import React from "react";
import Search from "./Search"; 

const Header = ({ onSearch, title }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#FF8C00",
        color: "white",
        alignItems: "center",
      }}
    >
      <h1>{title}</h1>
      <Search onSearch={onSearch} /> 
    </header>
  );
};

export default Header;