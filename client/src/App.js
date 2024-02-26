import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Customer from './components/Customer/Customer.js';

const App = () => {

	return (
		<div className='main'>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/customer" element={<Customer />} />
				</Routes>
				<Footer />
			</Router >
		</div >
	);
}

export default App;