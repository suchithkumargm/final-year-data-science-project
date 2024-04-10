import React from 'react';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import './LocationVsCount.css';

const LocationVsCount = () => {

    const topLocations = [{ "location": "BTM", "count": 5056 }, { "location": "others", "count": 4954 }, { "location": "HSR", "count": 2494 }, { "location": "Koramangala 5th Block", "count": 2479 }, { "location": "JP Nagar", "count": 2218 }, { "location": "Whitefield", "count": 2105 }, { "location": "Indiranagar", "count": 2026 }, { "location": "Jayanagar", "count": 1916 }, { "location": "Marathahalli", "count": 1805 }, { "location": "Bannerghatta Road", "count": 1609 }]

    const labels = topLocations.map(item => item.location);
    const counts = topLocations.map(item => item.count);

    return (
        <div className='right-side-graph-content'>
            <h1>Location Vs Count</h1>
            <Bar
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Number of Restaurants',
                            data: counts,
                            backgroundColor: 'rgba(75,192,192,0.2)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderWidth: 1,
                        },
                    ],
                }}
                options={{
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                }}
            />
        </div>
    )
}

export default LocationVsCount;