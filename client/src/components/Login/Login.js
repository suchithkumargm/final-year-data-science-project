import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './login.css';

const Login = (props) => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData);
    const response = await fetch('http://localhost:5000/auth/customer/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ customerName: formData.username, password: formData.password }) // 
    });
    const json = await response.json();
    if (json.success) {
        console.log(json)
      localStorage.setItem('token', json.authToken);
      localStorage.setItem('role', json.role);
      localStorage.setItem('customerId', json.customerId);
      alert("Logged in Successfully!", "success");
      navigate("/");
     
    } else {
      alert("Invalid Credentials!", "danger");
    }
  };

  return (
    <>
      <div className="full-form">
        <div className="form-name">
          <p className="page-name">Login to your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-tags">
            <input 
              type="text" 
              className="inpt-label" 
              placeholder="Username" 
              name="username" 
              value={formData.username} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="password" 
              className="inpt-label" 
              placeholder="Password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="forget-label">
            <Link to="#">Forgot password?</Link>
          </div>
          <div className="login-btn">
            <input className="l-btn" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
