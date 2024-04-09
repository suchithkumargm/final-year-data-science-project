import React,{useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar.js';

import LocationVsCount from './Sidebar/NavigationItems/LocationVsCount.js';
import Header from '../Header/Header.js';

const RestaurantOwnerRoutes = () => {

	const [restaurantsData,setRestaurantsData]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/restaurant-owner/getRestaurantDetails', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const fetchedDetails = await response.json();
                console.log(fetchedDetails);

                if (fetchedDetails) {
                    setRestaurantsData(fetchedDetails);
                }
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            }
        };
        fetchData();
    },[])

	return (
		<div className='main'>
			<Sidebar />
			<Routes>
				<Route path="/analysis/location-vs-count" element={<LocationVsCount />} />
			</Routes>
		</div >
	);
}

export default RestaurantOwnerRoutes;