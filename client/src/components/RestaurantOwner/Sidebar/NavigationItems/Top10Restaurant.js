import React, { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";

import './NavigationItems.css'; // Import CSS file for styling

const Top10Restaurant = ({ location, restaurantsData }) => {
    const [topRestaurants, setTopRestaurants] = useState([]);

    useEffect(() => {
        // Filter restaurants by location
        const filteredRestaurants = restaurantsData.filter(restaurant => restaurant.location === location);
        // Sort filtered restaurants by votes in descending order
        const sortedRestaurants = filteredRestaurants.sort((a, b) => b.votes - a.votes);
        // Select top 10 restaurants
        const top10Restaurants = sortedRestaurants.slice(0, 10);
        setTopRestaurants(top10Restaurants);
    }, [location, restaurantsData]);

    // Extract restaurant names and votes for the chart
    const restaurantNames = topRestaurants.map(restaurant => restaurant.name);
    const votes = topRestaurants.map(restaurant => restaurant.votes);

    // Construct data for the chart
    const chartData = {
        labels: restaurantNames,
        datasets: [{
            label: 'Votes',
            data: votes,
            backgroundColor: 'skyblue',
        }],
    };

    // Customize y-axis ticks
    const options = {
        scales: {
            y: {
                ticks: {
                    stepSize: 1000,
                    beginAtZero: true,
                    callback: function (value, index, values) {
                        return value.toLocaleString(); // Format ticks with commas for better readability
                    }
                }
            }
        }
    };

    return (
        <div className='right-side'>
            <h2>Top 10 Restaurants by Votes in {location}</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default Top10Restaurant;
