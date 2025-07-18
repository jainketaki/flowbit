// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // dummy login token
    localStorage.setItem("token", "demo_token");
    navigate("/dashboard");
  };

  return (
    <div className="page">
      <h2>Login</h2>
      <form className="form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p onClick={() => navigate("/register")} className="link">
        Don’t have an account? Register
      </p>
    </div>
  );
}

export default Login;
