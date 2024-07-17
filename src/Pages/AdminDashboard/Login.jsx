import "../../style/AdminDashboard/Login.css";
// src/components/AdminAuth.js
import React, { useState } from 'react';
import axios from 'axios';


const AdminAuth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;

  const toggleAuthMode = () => {
    setIsSignup(!isSignup);
  };

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup ? '/api/admin/signup' : '/api/admin/login';
    try {
      const res = await axios.post(url, formData);
      console.log(res.data);
      // Handle token storage and redirection if login
      if (!isSignup) {
        // Example: localStorage.setItem('token', res.data.token);
        // Redirect to admin dashboard or other page
      }
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignup ? 'Admin Signup' : 'Admin Login'}</h2>
        <form onSubmit={onSubmit}>
          {isSignup && (
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onChange}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
          <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
        </form>
        <button onClick={toggleAuthMode} className="switch-button">
          {isSignup ? 'Switch to Login' : 'Switch to Signup'}
        </button>
      </div>
    </div>
  );
};

export default AdminAuth;
