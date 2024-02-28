import React from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

import './CustomerHome.css';

const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

const CustomerHome = () => {
    const { data: restaurants, error } = useSWR('http://localhost:5000/customers/restaurants/getallrestaurant/Mysore Road', fetcher);
    // const { data: recommendations, err } = useSWR('http://localhost:5000/customers/restaurants/getallrestaurant/Banashankari', fetcher);
    
    if (error) {
        console.error('Error fetching restaurants:', error);
    }
    // if (err) {
    //     console.error('Error fetching recommendations:', error);
    // }

    return (
        <>
            <div class="recommendations">
                <h1>Personalized Recommendations Just For You 😋 </h1>
                <div class="recommendations-cards">
                    <Link to="#" id="card1" class="card">
                        <p>Domino's</p>
                    </Link>
                    <Link to="#" id="card2" class="card">
                        <p>Burger King</p>
                    </Link>
                    <Link to="#" id="card3" class="card">
                        <p>Nati Masala</p>
                    </Link>
                    <Link to="#" id="card4" class="card">
                        <p>Chat center</p>
                    </Link>
                </div>
            </div>

            <div class="search-bar">
                <input type="text" class="search" placeholder="Search for Restaurants" />
            </div>

            <div class="filters"></div>

            <div class="restaurants">
                {restaurants ? (
                    restaurants.map((restaurant) => {
                        // Convert cuisines string to an array
                        const cuisinesArray = restaurant.cuisines.replace(/'/g, '').replace(/\[|\]/g, '').split(', ');
                        const displayedCuisines = cuisinesArray.slice(0, 2);

                        return (
                            <Link key={restaurant.restaurant_id} to={`${restaurant.restaurant_id}`}>
                                <div class="restaurant card">
                                    <div class="image"></div>
                                    <div class="details">
                                        <h3 class="hotel">{restaurant.name}</h3>
                                        <p class="location">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin">
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            {restaurant.location}
                                        </p>
                                        <ul class="cuisines">
                                            {displayedCuisines.map((cuisine, index) => (
                                                <li key={index}>{cuisine}</li>
                                            ))}
                                        </ul>
                                        <div class="ratings">
                                            <div class="rating">Food : {restaurant.food_rating}⭐</div>
                                            <div class="rating">Service : {restaurant.service_rating}⭐</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </div>


        </>
    )
}

export default CustomerHome;