import React, { useState, useEffect } from 'react';
import { Chart } from 'react-chartjs-2';

import './CorrelationHeatmap.css'; // Import CSS file for styling

const CorrelationHeatmap = ({ location,restaurantsData }) => {
    const [correlationMatrix, setCorrelationMatrix] = useState([]);

    useEffect(() => {
        const calculateCorrelationMatrix = () => {
            try {
                // Filter restaurants data by the desired location
                const locationData = restaurantsData.filter(restaurant => restaurant.location === location);
                // Select numerical columns for correlation analysis
                const numericalData = locationData.map(restaurant => ({
                    rating: restaurant.rating,
                    votes: restaurant.votes,
                    Cost2plates: restaurant.Cost2plates
                }));
                // Convert numerical data to a format compatible with correlation calculation
                const dataArray = numericalData.map(entry => Object.values(entry));
                // Calculate the correlation matrix
                const correlationMatrix = calculateCorrelation(dataArray);
                setCorrelationMatrix(correlationMatrix);
            } catch (error) {
                console.error('Error calculating correlation matrix:', error);
            }
        };

        calculateCorrelationMatrix();
    }, [restaurantsData, location]);

    // Function to calculate the correlation matrix
    const calculateCorrelation = (data) => {
        // Implementation of correlation calculation
        // You can use a library like 'ml-matrix' for this calculation
        // This is a placeholder function, replace it with your actual calculation
        return [
            [1.0, 0.5, 0.3],
            [0.5, 1.0, 0.7],
            [0.3, 0.7, 1.0]
        ]; // Example correlation matrix
    };

    // Construct data for the scatter plot
    const data = {
        datasets: correlationMatrix.map((row, rowIndex) => ({
            data: row.map((value, colIndex) => ({
                x: colIndex,
                y: rowIndex,
                value: value
            })),
            backgroundColor: function (context) {
                var value = context.dataset.data[context.dataIndex].value;
                var alpha = (value - Math.min(...correlationMatrix.flat())) / (Math.max(...correlationMatrix.flat()) - Math.min(...correlationMatrix.flat()));
                return 'rgba(255, 99, 132, ' + alpha + ')';
            },
            borderColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 1,
            pointRadius: 5,
            pointHoverRadius: 8,
        }))
    };

    // Customize scatter plot options
    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    callback: function(value, index, values) {
                        return ['Rating', 'Votes', 'Cost2plates'][value];
                    }
                }
            },
            y: {
                ticks: {
                    callback: function(value, index, values) {
                        return ['Rating', 'Votes', 'Cost2plates'][value];
                    }
                }
            }
        },
    };

    return (
        <div className='heatmap-container'>
            <h2>Correlation Heatmap for {location}</h2>
            <Chart type={'scatter'} data={data} options={options} />
        </div>
    );
};

export default CorrelationHeatmap;
