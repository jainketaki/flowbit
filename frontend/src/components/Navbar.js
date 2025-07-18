import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; // CSS for styling

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // redirect to login
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">Flowbit</div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
