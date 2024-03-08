import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './ForgotPassword.css';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: ''
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
        const response = await fetch('http://localhost:5000/auth/customer/forgotPassword/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: formData.email }) // 
        });
        const json = await response.json();
        if (json.message) {
            alert( json.message);
            navigate(`/customer/login/verify-otp/${formData.email}`);

            // navigate("/customer/login/verify-otp", { state: { email: formData.email } });

        }else if(json.error){
            alert(json.error)
        }
        
        else {
            alert("Invalid Credentials!", "danger");
        }
    };

    return (
        <div className="login-form">
            <div className="form-name">
                <p className="page-name">Forgot Password</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-tags">
                    <input
                        type="text"
                        className="input-label"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="login-btn">
                    <input className="l-btn" type="submit" value="Send OTP" />
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;

