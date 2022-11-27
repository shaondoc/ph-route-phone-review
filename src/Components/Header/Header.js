import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
};

export default Header;
