import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './CustomerHome.css';
import PopUp from '../PopUp/PopUp.js';

const CustomerHome = () => {
    const [isPopupOpen, setPopupOpen] = useState(true);
    const [selectedLocation, setSelectedLocation] = useState('');

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

                const json = await response.json();
                console.log(json);
                if (json.success) {
                    console.log(json);
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
            <div className="recommendations">
                <h1>Personalized Recommendations Just For You 😋 </h1>
                <div className="recommendations-cards">
                    <Link to="#" id="card1" className="card">
                        <p>Domino's</p>
                    </Link>
                    <Link to="#" id="card2" className="card">
                        <p>Burger King</p>
                    </Link>
                    <Link to="#" id="card3" className="card">
                        <p>Nati Masala</p>
                    </Link>
                    <Link to="#" id="card4" className="card">
                        <p>Chat center</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CustomerHome;
