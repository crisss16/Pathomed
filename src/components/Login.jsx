import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {Link} from "react-router-dom";

const Login = () => {
  const [cnp, setCnp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if(cnp.length === 13 && /^\d+$/.test(cnp)) {
        setError("");
        navigate(`/dashboard/${cnp}`);
  } else {
    setError("Introduceti un CNP valid (13 cifre)!");
  }
};

  return (
    <div className="login-container">
      <h2>Accesare rezultate</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="cnp">Introduceti CNP-ul:</label>
        <input 
          type="text"
          id="cnp"
          value={cnp}
          onChange={(e) => setCnp(e.target.value)}
          maxLength="13"
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
