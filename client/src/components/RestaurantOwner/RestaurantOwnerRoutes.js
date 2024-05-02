import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar.js';
import LocationVsCount from './Sidebar/NavigationItems/LocationVsCount.js';
import OnlineorderVsCount from './Sidebar/NavigationItems/OnlineorderVsCount.js';
import Top10Restaurant from './Sidebar/NavigationItems/Top10Restaurant.js';
import RestaurantCountPlot from './Sidebar/NavigationItems/RestaurantCountPlot.js';
import CorrelationHeatmap from './Sidebar/NavigationItems/CorrelationHeatmap.js';
import RatingDistribution from './Sidebar/NavigationItems/RatingDistribution.js';

import './RestaurantOwnerRoutes.css';
import Top10DishesLiked from './Sidebar/NavigationItems/Top10DishesLiked.js';
import DensityOfRating from './Sidebar/NavigationItems/DensityOfRating.js';
import LocationVsBookTable from './Sidebar/NavigationItems/LocationVsBookTable.js';

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
                <Route path="/analysis/top-10-dishes-liked-vs-vote" element={<Top10DishesLiked location={location} restaurantsData={restaurantsData} />} />
                <Route path="/analysis/correlationheatmap" element={<CorrelationHeatmap location={location} restaurantsData={restaurantsData} />} />
                <Route path="/analysis/online-order-vs-rating" element={<RatingDistribution location={location} restaurantsData={restaurantsData} />} />
                <Route path="/analysis/density-vs-rating" element={<DensityOfRating location={location} restaurantsData={restaurantsData} />} />
                <Route path="/analysis/location-vs-book-table" element={<LocationVsBookTable location={location} restaurantsData={restaurantsData} />} />
            </Routes>
        </div >
    );
}

export default RestaurantOwnerRoutes;
