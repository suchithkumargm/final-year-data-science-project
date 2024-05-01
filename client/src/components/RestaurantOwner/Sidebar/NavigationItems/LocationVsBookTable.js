import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import './LocationVsBookTable.css';

const LocationVsBookTable = ({ location, restaurantsData }) => {
    const [countData, setCountData] = useState({});

    useEffect(() => {
        const fetchData = () => {
            try {
                // Filter restaurants by the desired location
                const locationData = restaurantsData.filter(restaurant => restaurant.location === location);
                // Count the number of restaurants with and without table booking
                const withTableBooking = locationData.filter(restaurant => restaurant.book_table === 'Yes').length;
                const withoutTableBooking = locationData.filter(restaurant => restaurant.book_table === 'No').length;
                setCountData({ withTableBooking, withoutTableBooking });
            } catch (error) {
                console.error('Error fetching and processing data:', error);
            }
        };

        fetchData();
    }, [location, restaurantsData]);

    // Construct data for the bar chart
    const chartData = {
        labels: ['With Table Booking', 'Without Table Booking'],
        datasets: [
            {
                label: 'Count',
                data: [countData.withTableBooking, countData.withoutTableBooking],
                backgroundColor: ['skyblue', 'lightgreen'],
            },
        ],
    };

    // Customize bar chart options
    const options = {
        indexAxis: 'x', // Reverse the x-axis
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className='location-vs-book-table'>
            <h2>Location vs Book Table in {location}</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default LocationVsBookTable;
