import React from "react";
import "../styles/Dropdown.css";
import { useState } from "react";
const Dropdown = ({ dropdown , label}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={() => {
          toggleDropdown();
        }}
      >
        {label}
      </div>
      <div className="dropdown-content">
        {showDropdown &&
          dropdown.map((dp, index) => (
            <>
              <div className="dropdown-item">
                <div className="dropdown-icon">{dp.icon}</div>
                <div className="dropdown-link">{dp.link}</div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
