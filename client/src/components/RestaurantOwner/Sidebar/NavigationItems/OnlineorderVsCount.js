import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

import './NavigationItems.css'; // Import CSS file for styling

const OnlineorderVsCount = ({ location, restaurantsData }) => {
    const [onlineOrderCounts, setOnlineOrderCounts] = useState({});

    useEffect(() => {
        const fetchOnlineOrderCounts = () => {
            try {
                // Filter restaurants by the desired location
                const locationData = restaurantsData.filter(restaurant => restaurant.location === location);
                // Count the number of restaurants that take online orders and those that do not
                const onlineOrders = locationData.filter(restaurant => restaurant.online_order === 'Yes').length;
                const offlineOrders = locationData.filter(restaurant => restaurant.online_order === 'No').length;
                // Calculate percentages
                const total = onlineOrders + offlineOrders;
                const onlinePercentage = (onlineOrders / total) * 100;
                const offlinePercentage = (offlineOrders / total) * 100;
                setOnlineOrderCounts({ Yes: onlinePercentage, No: offlinePercentage });
            } catch (error) {
                console.error('Error fetching and processing online order data:', error);
            }
        };

        fetchOnlineOrderCounts();
    }, [location, restaurantsData]);

    // Construct data for the pie chart
    const chartData = {
        labels: Object.keys(onlineOrderCounts),
        datasets: [{
            data: Object.values(onlineOrderCounts),
            backgroundColor: ['skyblue', 'lightgreen'],
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
                    const dataset = data.datasets[tooltipItem.datasetIndex];
                    const total = dataset.data.reduce((acc, value) => acc + value, 0);
                    const currentValue = dataset.data[tooltipItem.index];
                    const percentage = Math.round((currentValue / total) * 100);
                    return `${data.labels[tooltipItem.index]}: ${percentage} %`;
                },
            },
        },
    };

    return (
        <div className='right-side-pie'>
            <h2>Online Order Distribution in {location}</h2>
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default OnlineorderVsCount;
