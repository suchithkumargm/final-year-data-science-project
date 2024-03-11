import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Eye ,EyeOff } from 'lucide-react';
import './Resetpassword.css';

const Resetpassword = () => {
    const { email } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        newPassword: ''
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
        const response = await fetch(`http://localhost:5000/auth/customer/forgotPassword/reset-password/${email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ newPassword: formData.newPassword }) // 
        });
        const json = await response.json();
        if (json.message) {
            alert(json.message);
            navigate('/customer/login/');
        } else if (json.error) {
            alert(json.error)
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
                <p className="page-name">Reset Password</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-tags">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="input-label"
                        placeholder="New Password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        className="show-password-button"
                        onClick={handleTogglePassword}
                    >
                        {showPassword ? <EyeOff/> : <Eye/>}
                    </button>
                </div>
                <div className="data">
                    <p> Reset the password</p>
                </div>
                <div className="login-btn">
                    <input className="l-btn" type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default Resetpassword;
