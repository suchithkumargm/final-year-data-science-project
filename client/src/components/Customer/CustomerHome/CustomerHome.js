import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import './CustomerHome.css';
import PopUp from '../PopUp/PopUp.js';
import BrowseRestaurants from './BrowseRestaurants.js';

const CustomerHome = () => {
    const [isPopupOpen, setPopupOpen] = useState(true);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/customers/orders/getRestaurantRecommendations', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ location: selectedLocation, customer_id: localStorage.getItem('customerId') })
                });

                const fetchedRecommendations = await response.json();

                if (fetchedRecommendations) {
                    setRecommendations(fetchedRecommendations);
                }
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            }
        };

        // Fetch recommendations
        selectedLocation && fetchData();
    }, [selectedLocation]);

    const handleSave = (selectedLocation) => {
        setSelectedLocation(selectedLocation);
        setPopupOpen(false);
    };

    return (
        <>
            {isPopupOpen && <PopUp onSave={handleSave} />}
            {recommendations && (
                <div className="recommendations">
                    <h1>Personalized Recommendations Just For You 😋 </h1>
                    <div className="recommendations-cards">
                        {recommendations.map((restaurant, index) => (
                            <Link to={`${restaurant.restaurant_id}`} key={index} className="card" id={`card${index+1}`}>
                                <p>{restaurant.name.substring(0,12)}..</p>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            <BrowseRestaurants selectedLocation={selectedLocation}/>
        </>
    );
};

export default CustomerHome;
