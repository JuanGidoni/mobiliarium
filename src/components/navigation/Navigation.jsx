import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-brand">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li>
            <Link className="nav-link" to="/categories">
              Categorías
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/filters">
              Filters
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/search">
              Search
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-toggle">
        <button aria-label="Toggle navigation menu" onClick={toggleMenu}>
          <span className="hamburger-icon">&#9776;</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
