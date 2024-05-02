import React, { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";

import './NavigationItems.css'; // Import CSS file for styling

const Top10DishesLiked = ({ location, restaurantsData }) => {
    const [topDishes, setTopDishes] = useState([]);

    useEffect(() => {
        const fetchTopDishes = async () => {
            try {
                // Filter restaurants by location
                const filteredRestaurants = restaurantsData.filter(restaurant => restaurant.location === location);
                // Extract and process the dish_liked data
                const allDishes = filteredRestaurants.map(restaurant => restaurant.dish_liked).join().split(',').map(dish => dish.trim());
                const dishCounts = allDishes.reduce((acc, dish) => {
                    acc[dish] = (acc[dish] || 0) + 1;
                    return acc;
                }, {});
                // Sort the dishes by count in descending order
                const sortedDishes = Object.entries(dishCounts).sort((a, b) => b[1] - a[1]);
                // Select the top 10 dishes
                const top10Dishes = sortedDishes.slice(0, 10);
                setTopDishes(top10Dishes);
            } catch (error) {
                console.error('Error fetching and processing dish data:', error);
            }
        };

        fetchTopDishes();
    }, [location, restaurantsData]);

    // Extract dish names and counts for the chart
    const dishNames = topDishes.map(dish => dish[0]);
    const dishCounts = topDishes.map(dish => dish[1]);

    // Construct data for the chart
    const chartData = {
        labels: dishNames,
        datasets: [{
            label: 'Count',
            data: dishCounts,
            backgroundColor: 'skyblue',
        }],
    };

    // Customize y-axis ticks
    const options = {
        scales: {
            y: {
                ticks: {
                    stepSize: 1,
                    beginAtZero: true,
                }
            }
        }
    };

    return (
        <div className='right-side'>
            <h2>Top 10 Dishes Liked in {location}</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default Top10DishesLiked;
