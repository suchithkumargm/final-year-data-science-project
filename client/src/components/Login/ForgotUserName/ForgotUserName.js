import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './ForgotUserName.css';

const ForgotUserName = () => {
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
        // Convert email to lowercase
        const email = formData.email.toLowerCase();
        const response = await fetch('http://localhost:5000/auth/customer/forgotuserName/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email }) // Pass the lowercase email
        });
        const json = await response.json();
        if (json.message) {
            alert( json.message);
            navigate('/customer/login/');
        } else if(json.error){
            alert(json.error);
            navigate('/customer/createCustomer');
        } else {
            alert("Invalid Credentials!", "danger");
        }
    };
    

    return (
        <div className="login-form">
            <div className="form-name">
                <p className="page-name">Forgot UserName</p>
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
                <div className="data">
                    <p>We’ll send your UserName to this email  if it matches an existing ZomatoHelp account.</p>
                </div>
                <div className="login-btn">
                    <input className="l-btn" type="submit" value="Send " />
                </div>
            </form>
        </div>
    );
};

export default ForgotUserName;

