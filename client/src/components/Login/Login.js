import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './login.css';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

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
            setIsLoggedIn(true);
            localStorage.setItem('token', json.authToken);
            localStorage.setItem('role', json.role);
            localStorage.setItem('customerId', json.customerId);
            alert("Logged in Successfully!", "success");
            navigate("/");

        } else {
            alert("Invalid Credentials!", "danger");
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-form">
            <div className="form-name">
                <p className="page-name">Login to your account</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-tags">
                    <input
                        type="text"
                        className="input-label"
                        placeholder="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type={showPassword ? "text" : "password"} // Change type based on showPassword state
                        className="input-label"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        className="show-password-button"
                        onClick={handleTogglePassword}
                    >
                        {showPassword ? "Hide" : "Show"} 
                    </button>
                </div>
                <div className="forget-label">
                    <Link to="/customer/login/forgotpassword">Forgot password?</Link>
                </div>
                <div className="login-btn">
                    <input className="l-btn" type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
};

export default Login;
