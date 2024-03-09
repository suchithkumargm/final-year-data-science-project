
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './VerifyOtp.css';

const VerifyOtp = () => {
    const { email } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        custotp: ''
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
        const response = await fetch(`http://localhost:5000/auth/customer/forgotPassword/verify-otp/${email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ custotp: formData.custotp }) 
        });
        const json = await response.json();
        console.log("jk",json)
        if (json.message) {
            alert( json.message);
            navigate(`/customer/login/reset-password/${email}`);

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
                <p className="page-name">Enter OTP</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-tags">
                    <input
                        type="text"
                        className="input-label"
                        placeholder="Enter OTP"
                        name="custotp"
                        value={formData.custotp}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="login-btn">
                    <input className="l-btn" type="submit" value="Verify" />
                </div>
            </form>
        </div>
    );
};

export default VerifyOtp;

