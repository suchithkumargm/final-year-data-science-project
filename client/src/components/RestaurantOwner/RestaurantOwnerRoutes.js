import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar.js';
import LocationVsCount from './Sidebar/NavigationItems/LocationVsCount.js';
import OnlineorderVsCount from './Sidebar/NavigationItems/OnlineorderVsCount.js';
import Top10Restaurant from './Sidebar/NavigationItems/Top10Restaurant.js';
import RestaurantCountPlot from './Sidebar/NavigationItems/RestaurantCountPlot.js';

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
                <Route path="/analysis/top-10-restaurant-vs-vote" element={<Top10Restaurant location={location} restaurantsData={restaurantsData} />} />
                <Route path="/analysis/restaurant-vs-count" element={<RestaurantCountPlot location={location} restaurantsData={restaurantsData} />} />
            </Routes>
        </div >
    );
}

export default RestaurantOwnerRoutes;
