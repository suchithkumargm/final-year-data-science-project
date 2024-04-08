import React, { useState,useEffect } from 'react';

import Sidebar from './Sidebar/Sidebar.js';

const GraphAnalysis=()=>{

    const [restaurantsData,setRestaurantsData]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/restaurant-owner/getRestaurantDetails', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const fetchedDetails = await response.json();
                console.log(fetchedDetails);

                if (fetchedDetails) {
                    setRestaurantsData(fetchedDetails);
                }
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            }
        };
        fetchData();
    },[])

    return (
        <div>
            <Sidebar/>
        </div>
    )
}

export default GraphAnalysis;