import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

import './NavigationItems.css'; // Import CSS file for styling

const DensityOfRating = ({ location, restaurantsData }) => {
    const [ratingCounts, setRatingCounts] = useState([]);

    useEffect(() => {
        const fetchRatingCounts = () => {
            try {
                // Filter restaurants by the desired location
                const locationData = restaurantsData.filter(restaurant => restaurant.location === location);
                // Define the rating ranges
                const ratingRanges = [
                    { start: 1, end: 2 },
                    { start: 2, end: 3 },
                    { start: 3, end: 4 },
                    { start: 4, end: 4.5 },
                    { start: 4.5, end: 5 }
                ];
                // Calculate the total count of restaurants
                const totalCount = locationData.length;
                // Group ratings into the defined ranges and calculate the percentage of restaurants in each range
                const percentages = ratingRanges.map(({ start, end }) => {
                    const countInRange = locationData.filter(restaurant => restaurant.rating >= start && restaurant.rating < end).length;
                    return (countInRange / totalCount) * 100;
                });
                setRatingCounts(percentages);
            } catch (error) {
                console.error('Error fetching and processing rating data:', error);
            }
        };

        fetchRatingCounts();
    }, [location, restaurantsData]);

    // Construct data for the pie chart
    const chartData = {
        labels: ['1-2', '2-3', '3-4', '4-4.5', '4.5-5'],
        datasets: [{
            data: ratingCounts,
            backgroundColor: ['#ff9999', '#ffcc99', '#ffff99', '#99ff99', '#99ccff'],
        }],
    };

    // Customize pie chart options
    const options = {
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
        tooltips: {
            callbacks: {
                label: (tooltipItem, data) => {
                    const percentage = Math.round(data.datasets[0].data[tooltipItem.index]);
                    return `${data.labels[tooltipItem.index]}: ${percentage}%`;
                },
            },
        },
    };

    return (
        <div className='right-side-pie'>
            <h2>Density of Rating in {location}</h2>
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default DensityOfRating;
