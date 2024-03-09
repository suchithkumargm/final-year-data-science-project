import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Restaurant.css'
import hotelName from '../../../assets/images/restaurant.avif'

const Restaurant = () => {
    const navigate = useNavigate();

    const handleNavigateBack = () => {
        navigate('/customers/browse-restaurants'); // Navigates back one step in the history
    };

    const { id } = useParams();
    const [restaurantState, setRestaurantState] = useState({});

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const response = await fetch(`http://localhost:5000/customers/restaurants/getrestaurant/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const restaurant = await response.json();

                if (restaurant) {
                    setRestaurantState(restaurant);
                }
            } catch (error) {
                console.error('Error fetching restaurants:', error);
            }
        };

        fetchRestaurant()
        // console.log(restaurantState);
        // const cuisinesArray = restaurantState.cuisines.replace(/'/g, '').replace(/\[|\]/g, '').split(',');
        // const displayedCuisines = cuisinesArray.slice(0, 2);
        // console.log(displayedCuisines);
    }, []);

    return (
        restaurantState && (
            <div class="restaurant-page">
                <div class="restaurant-title">
                    <div class="restaurant-name">{restaurantState.name}</div>
                    <div class="location"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg> {restaurantState.location}</div>
                </div>

                <img src={hotelName} alt="" class="restaurant-img" />

                <div class="hotel-basic-info">
                    <div class="left-container">
                        <h1 class="hotel-name">{restaurantState.name}</h1>
                        <p class="address">{restaurantState.address}</p>
                    </div>
                    <div class="right-container">
                        <Link to={restaurantState.url} target="_blank" class="zomato" >zomato</Link>
                        <p class="phone"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="lucide lucide-phone">
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>{restaurantState.phone}</p>
                    </div>
                </div>

                <div class="rating">
                    <h2>Rating</h2>
                    <div class="ratings">
                        <p class="overall-rating">Overall Rating : {restaurantState.rating}/5</p>
                        <p class="food-rating">Food Rating : {restaurantState.service_rating}/5</p>
                        <p class="service-rating">Service Rating : {restaurantState.food_rating}/5</p>
                    </div>
                </div>

                <div class="cuisine">
                    <h2>Cuisines</h2>
                    {/* <ul class="cuisines">
                        <li>North Indian</li>
                        <li>North Indian</li>
                        <li>North Indian</li>
                    </ul> */}
                    {/* <ul>
                        {cuisines.map((cuisine, index) => (
                            <li key={index}>{cuisine}</li>
                        ))}
                    </ul> */}
                </div>

                <div class="top-pick">
                    <h2>Top Picks</h2>
                    <ul class="top-picks">
                        <li>North Indian</li>
                        <li>North Indian</li>
                        <li>North Indian</li>
                    </ul>
                </div>

                <div class="cost side-by-side">
                    <h2>Average Cost :</h2>
                    <p>{restaurantState.Cost2plates} for 2 people</p>
                </div>

                <div class="online-order side-by-side">
                    <h2>Online Order :</h2>
                    <p>{restaurantState.online_order}</p>
                </div>

                <div class="book-table side-by-side">
                    <h2>Book Table :</h2>
                    <p>{restaurantState.book_table}</p>
                </div>

                <button onClick={handleNavigateBack} class="back">Back</button>
            </div>
        )
    )
}

export default Restaurant
