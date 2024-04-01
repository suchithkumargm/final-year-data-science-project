import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './CustomerHome.css';
import PopUp from '../PopUp/PopUp.js';
import BrowseRestaurants from './BrowseRestaurants.js';
import { useAppContext } from '../../../AppContext.js';

const CustomerHome = () => {
    const { locationPopup, setLocationPopup } = useAppContext();

    const [isPopupOpen, setPopupOpen] = useState(true);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('location')) {
            setSelectedLocation(localStorage.getItem('location'))
        }
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
            {/* {isPopupOpen && localStorage.getItem('location') == null && !locationPopup && <PopUp onSave={handleSave} />} */}
            {!locationPopup && <PopUp onSave={handleSave} />}
            {recommendations ? (
                <div className="recommendations" >
                    <h1>Personalized Recommendations Just For You 😋 </h1>
                    <div className="recommendations-cards">
                        {recommendations.map((restaurant, index) => (
                            <Link to={`${restaurant.restaurant_id}`} key={index} className="card" id={`card${index + 1}`} style={{
                                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.75) 9.56%, rgba(0, 0, 0, 0) 100%), url(${restaurant.image_url})`,

                                backgroundSize:'100% 100%',
                                backgroundPosition: 'center'
                            }}>
                                <p>{restaurant.name.substring(0, 12)}..</p>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (<div class="loading-spinner"></div>)}

            <BrowseRestaurants selectedLocation={selectedLocation} handleRestaurantClick />
        </>
    );
};

export default CustomerHome;
