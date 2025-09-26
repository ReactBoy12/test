import React, { useState } from "react";

// Login receives a prop `onLogin` — a function the parent supplies to handle successful login.
export default function Form({ onLogin }) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();           
    if (username && password) {   
      onLogin({ username, password }); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      
      <input
         data-testid="user"
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        data-testid="pass"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}
