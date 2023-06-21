"use client";
import React, { useState } from "react";
import "../../styles/login.css";
import { loginUser } from "../../helpers/auth";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e : React.SyntheticEvent) => {
    e.preventDefault();
    let res = loginUser(email, password);
    console.log(res);
  };

  return (
    <div className="login-container">
      <div className="card-container">
        <h3>Login</h3>
        <form onSubmit={handleLogin}>
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
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
