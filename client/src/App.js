import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import CustomerHome from './components/Customer/CustomerHome/CustomerHome.js';
import SignUp from './components/Sign Up/SignUp.js';
import Login from './components/Login/Login.js';

import ForgotPassword  from './components/Login/Forgotpassword/ForgotPassword.js';
import VerifyOtp from './components/Login/Verifyotp/VerifyOtp.js';
import Resetpassword from './components/Login/Resetpassword/Resetpassword.js';
import ForgotUserName from './components/Login/ForgotUserName/ForgotUserName.js';

import Restaurant from './components/Customer/Restaurant/Restaurant.js';

import GraphAnalysis from './components/RestaurantOwner/GraphAnalysis.js';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	useEffect(() => {
	}, [isLoggedIn]);
	return (
		<div className='main'>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/customer/createCustomer" element={<SignUp />} />
					<Route path="/customer/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
					<Route path="/customer/login/forgotpassword" element={<ForgotPassword />} />
					<Route path="/customer/login/forgotuserName" element={<ForgotUserName />} />
					<Route path="/customer/login/verify-otp/:email" element={<VerifyOtp />} />
					<Route path="/customer/login/reset-password/:email" element={<Resetpassword />} />
					<Route path="/customers/browse-restaurants" element={<CustomerHome />} />
					<Route path="/customers/browse-restaurants/:id" element={<Restaurant />} />
					<Route path="/restaurant-owner/analysis" element={<GraphAnalysis />} />
				</Routes>
				<Footer />
			</Router >
		</div >
	);
}

export default App;