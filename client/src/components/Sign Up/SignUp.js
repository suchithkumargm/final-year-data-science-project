import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye ,EyeOff } from 'lucide-react';
import './Signup.css';

const SignUp = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		customerName: '', // Changed to customerName to match server route
		password: '',
		confirmPassword: ''
	});
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		let { name, email, customerName, password, confirmPassword } = formData;
		// Convert email and customerName to lowercase
		email = email.toLowerCase();
		customerName = customerName.toLowerCase();
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}
		try {
			const response = await fetch('http://localhost:5000/auth/customer/createCustomer', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, email, customerName, password })
			});
			const json = await response.json();
			if (json.success) {
				alert("User Account created Successfully");
				navigate('/customer/login');
			} else {
				alert(json.error);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};
	

	const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

	return (
		<form onSubmit={handleSubmit}>
			<div className="signup-form">
				<div className="form-name">
					<p className="signup-label">Create a new account</p>
				</div>
				<div className="form-tags">
					<input
						type="text"
						className="input-label"
						placeholder="Full Name"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						required
					/>
					<input
						type="email"
						className="input-label"
						placeholder="Email Address"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						required
					/>
					<input
						type="text"
						className="input-label"
						placeholder="User Name"
						name="customerName" // Changed to customerName to match server route
						value={formData.customerName}
						onChange={handleInputChange}
						required
					/>
					<input
						type={showPassword ? "text" : "password"} // Change type based on showPassword state
						className="input-label"
						placeholder="Password"
						name="password"
						value={formData.password}
						onChange={handleInputChange}
						required
					/>
					<button
                        type="button"
                        className="show-password-button"
                        onClick={handleTogglePassword}
                    >
                        {showPassword ? <EyeOff/> : <Eye/>} 
                    </button>
					<input
						type={showConfirmPassword ? "text" : "password"} // Change type based on showConfirmPassword state
						className="input-label"
						placeholder="Confirm Password"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={handleInputChange}
						required
					/>
					<button
                        type="button"
                        className="show-password-button1"
                        onClick={handleToggleConfirmPassword}
                    >
                        {showConfirmPassword ? <EyeOff/> : <Eye/>} 
                    </button>
				</div>
				<div className="signup-btn">
					<input className="s-btn" type="submit" value="Sign Up" />
				</div>
			</div>
		</form>
	);
};

export default SignUp;
