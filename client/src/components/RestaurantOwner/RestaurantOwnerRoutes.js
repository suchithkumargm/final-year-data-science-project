import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar.js';
import LocationVsCount from './Sidebar/NavigationItems/LocationVsCount.js';
import OnlineorderVsCount from './Sidebar/NavigationItems/OnlineorderVsCount.js';

import './RestaurantOwnerRoutes.css';

const RestaurantOwnerRoutes = () => {
    const [restaurantsData, setRestaurantsData] = useState([]);
    const location = localStorage.getItem('location');

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

                if (fetchedDetails) {
                    setRestaurantsData(fetchedDetails);
                }
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // console.log(restaurantsData);
    }, [restaurantsData]);

    return (
        <div className='restaurant-analysis'>
            <Sidebar />
            <Routes>
                <Route path="/analysis/location-vs-count" element={<LocationVsCount />} />
                <Route path="/analysis/Online-Order-Vs-Count" element={<OnlineorderVsCount location={location} restaurantsData={restaurantsData} />} />
            </Routes>
        </div >
    );
}

export default RestaurantOwnerRoutes;
