import React from 'react'
import { Link } from 'react-router-dom';
import useSWR from 'swr';

import './Restaurant.css'
import hotelName from '../../../assets/images/restaurant.avif'

const Restaurant = () => {

    const { data: restaurant, error } = useSWR(
        `http://localhost:5000/customers/restaurants/getrestaurant/10005`,
        async (url) => {
            console.log("Before fetch:", url);
            const response = await fetch(url);
            console.log("After fetch:", url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        }
    );
    
    if (error) {
        console.error('Error fetching restaurants:', error);
    }

    return (
        <div class="restaurant-page">
            <div class="restaurant-title">
                {console.log("inside return", restaurant[0])}
                <div class="restaurant-name">{restaurant[0].name}</div>
                <div class="location"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg> {restaurant[0].location}</div>
            </div>

            <img src={hotelName} alt="" class="restaurant-img" />

            <div class="hotel-basic-info">
                <div class="left-container">
                    <h1 class="hotel-name">{restaurant[0].name}</h1>
                    <p class="address">{restaurant[0].address}</p>
                </div>
                <div class="right-container">
                    <Link to={restaurant[0].url} target="_blank" class="zomato" >zomato</Link>
                    <p class="phone"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-phone">
                        <path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>{restaurant[0].phone}</p>
                </div>
            </div>

            <div class="rating">
                <h2>Rating</h2>
                <div class="ratings">
                    <p class="overall-rating">Overall Rating : {restaurant[0].rating}/5</p>
                    <p class="food-rating">Food Rating : {restaurant[0].service_rating}/5</p>
                    <p class="service-rating">Service Rating : {restaurant[0].food_rating}/5</p>
                </div>
            </div>

            <div class="cuisine">
                <h2>Cuisines</h2>
                <ul class="cuisines">
                    <li>North Indian</li>
                    <li>North Indian</li>
                    <li>North Indian</li>
                </ul>
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
                <p>{restaurant[0].Cost2plates} for 2 people</p>
            </div>

            <div class="online-order side-by-side">
                <h2>Online Order :</h2>
                <p>{restaurant[0].online_order}</p>
            </div>

            <div class="book-table side-by-side">
                <h2>Book Table :</h2>
                <p>{restaurant[0].book_table}</p>
            </div>

            <button class="back">Back</button>
        </div>
    )
}

export default Restaurant
