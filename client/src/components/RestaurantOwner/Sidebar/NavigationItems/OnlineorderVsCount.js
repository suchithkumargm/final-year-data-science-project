import React ,{ useState, useEffect }from 'react';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import './OnlineorderVsCount.css';

const OnlineorderVsCount = ({ location, restaurantsData }) => {
    const [topRestaurants, setTopRestaurants] = useState([]);

    useEffect(() => {
        // Check if restaurantsData is available and not empty
        if (restaurantsData && restaurantsData.length > 0) {
            // Sort restaurants by votes in descending order
            const sortedRestaurants = restaurantsData.sort((a, b) => b.votes - a.votes);
            // Select top 10 restaurants
            const top10Restaurants = sortedRestaurants.slice(0, 10);
            setTopRestaurants(top10Restaurants);
        }
    }, [restaurantsData]);

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
        <div className='right-side-graph-content'>
            <h2>Top 10 Restaurants by Votes in {location}</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default OnlineorderVsCount;