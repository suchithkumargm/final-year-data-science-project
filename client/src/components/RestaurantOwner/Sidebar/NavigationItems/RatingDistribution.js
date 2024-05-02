import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import './NavigationItems.css'; // Import CSS file for styling

const RatingDistribution = ({ location, restaurantsData }) => {
    const [ratingData, setRatingData] = useState({});

    useEffect(() => {
        const fetchRatingData = () => {
            try {
                // Filter restaurants by the desired location
                const locationData = restaurantsData.filter(restaurant => restaurant.location === location);
                // Filter the data to include only restaurants with and without online orders
                const onlineOrders = locationData.filter(restaurant => restaurant.online_order === 'Yes');
                const noOnlineOrders = locationData.filter(restaurant => restaurant.online_order === 'No');
                // Calculate average ratings for restaurants with and without online orders
                const avgRatingOnline = calculateAverageRating(onlineOrders);
                const avgRatingNoOnline = calculateAverageRating(noOnlineOrders);
                setRatingData({ online: avgRatingOnline, noOnline: avgRatingNoOnline });
            } catch (error) {
                console.error('Error fetching and processing rating data:', error);
            }
        };

        fetchRatingData();
    }, [location, restaurantsData]);

    // Function to calculate average rating
    const calculateAverageRating = (data) => {
        if (data.length === 0) return 0;
        const totalRating = data.reduce((acc, cur) => acc + cur.rating, 0);
        return totalRating / data.length;
    };

    // Construct data for the bar chart
    const chartData = {
        labels: ['Online Orders', 'No Online Orders'],
        datasets: [
            {
                label: 'Average Rating',
                data: [ratingData.online, ratingData.noOnline],
                backgroundColor: ['skyblue', 'lightgreen'],
            },
        ],
    };

    // Customize bar chart options
    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 0.5,
                },
            },
        },
    };

    return (
        <div className='right-side'>
            <h2>Rating Distribution in {location}</h2>
                    <Bar data={chartData} options={options} />
        </div>
    );
};

export default RatingDistribution;
