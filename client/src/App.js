import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js'; 
import Footer from './components/Footer/Footer.js';
import Restaurant from './components/Customer/Restaurant/Restaurant.js';

const App = () => {

	return (
		<div className='main'>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/customers/browse-restaurants/:id" element={<Restaurant />} />
				</Routes>
				<Footer />
			</Router >
		</div >
	);
}

export default App;