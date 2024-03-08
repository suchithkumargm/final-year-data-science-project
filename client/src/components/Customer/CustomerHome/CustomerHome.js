import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './CustomerHome.css';
import PopUp from '../PopUp/PopUp.js';

const CustomerHome = () => {
    const [isPopupOpen, setPopupOpen] = useState(true);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [recommendations, setRecommendations] = useState({ topRestaurants: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("inside fetch data");
                const response = await fetch('http://localhost:5000/customers/orders/getRestaurantRecommendations', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ location: selectedLocation, customer_id: localStorage.getItem('customerId') })
                });

                const fetchedRecommendations = await response.json();
                console.log(fetchedRecommendations);

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
            {console.log("reco", recommendations)}
            {selectedLocation && (
                < div className="recommendations">
                    <h1>Personalized Recommendations Just For You 😋 </h1>
                    {console.log("checking", recommendations.topRestaurants)}
                    <div className="recommendations-cards">
                        {recommendations.map((restaurant, index) => (
                            <Link to="#" key={index} className="card">
                                <p>{restaurant.name}</p>
                            </Link>
                        ))}
                    </div>
                </div >
            )}
        </>
    );
};

export default CustomerHome;