import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import './NavigationItems.css'; // Import CSS file for styling

const RestaurantCountPlot = ({ location, restaurantsData }) => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
    useEffect(() => {
      // Filter restaurants based on location
      const filtered = restaurantsData.filter(restaurant => restaurant.location === location);
      setFilteredRestaurants(filtered);
    }, [location, restaurantsData]);
  
    // Function to count occurrences of restaurant types
    const countRestaurantTypes = () => {
      const counts = {};
      filteredRestaurants.forEach(restaurant => {
        const types = restaurant.rest_type.split(',').map(type => type.trim());
        types.forEach(type => {
          counts[type] = (counts[type] || 0) + 1;
        });
      });
      return counts;
    };
  
    // Extract labels (restaurant types) and data (counts) for the chart
    const counts = countRestaurantTypes();
    const labels = Object.keys(counts);
    const data = Object.values(counts);
  
    // Chart data object
    const chartData = {
      labels: labels,
      datasets: [{
        label: 'Count',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }],
    };
  
    // Chart options
    const chartOptions = {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          beginAtZero: true,
        },
      },
    };
  
    return (
      <div className='right-side'>
        <h2>Count of Different Types of Restaurants in {location}</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    );
  };
  
export default RestaurantCountPlot;
