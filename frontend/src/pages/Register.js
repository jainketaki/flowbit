import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="page">
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p onClick={() => navigate("/")} className="link">
        Already have an account? Login
      </p>
    </div>
  );
}

export default Register;

