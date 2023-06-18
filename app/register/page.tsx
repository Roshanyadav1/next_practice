"use client";
import React, { useState } from "react";
import "../../styles/login.css";

const Register = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="login-container">
      <div className="card-container">
        <h3>Register</h3>
        <form>
          <div style={{ marginTop: 10 }}>
            <label htmlFor="username">User Name</label>
            <br />
            <input
              value={userName}
              onChange={e => setUserName(e.target.value)}
              type="text"
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label htmlFor="password">Password</label>
            <br />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <button
              style={{ backgroundColor: "white", borderRadius: 4, padding: 5 }}
              type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
