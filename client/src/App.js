import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import CustomerHome from './components/Customer/CustomerHome/CustomerHome.js';
import SignUp from './components/Sign Up/SignUp.js';
import Login from './components/Login/Login.js';

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
					<Route path="/customers/browse-restaurants" element={<CustomerHome />} />
				</Routes>
				<Footer />
			</Router >
		</div >
	);
}

export default App;