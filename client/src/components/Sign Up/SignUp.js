import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { name, email, customerName, password, confirmPassword } = formData;
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
				body: JSON.stringify({ name, email, customerName, password }) // Updated key to customerName
			});
			const json = await response.json();
			if (json.success) {
				alert("User Account created Successfully")
				navigate('/customer/login');

			} else {
				console.log('Failure:', json.error);
				alert(json.error);

			}
		} catch (error) {
			console.error('Error:', error);

		}
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
						className="inpt-label"
						placeholder="Full Name"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						required
					/>
					<input
						type="email"
						className="inpt-label"
						placeholder="Email Address"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						required
					/>
					<input
						type="text"
						className="inpt-label"
						placeholder="User Name"
						name="customerName" // Changed to customerName to match server route
						value={formData.customerName}
						onChange={handleInputChange}
						required
					/>
					<input
						type="password"
						className="inpt-label"
						placeholder="Password"
						name="password"
						value={formData.password}
						onChange={handleInputChange}
						required
					/>
					<input
						type="password"
						className="inpt-label"
						placeholder="Confirm Password"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="signup-btn">
					<input className="s-btn" type="submit" value="Sign Up" />
				</div>
			</div>
		</form>
	);
};

export default SignUp;
