import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import images from '../../assets/images.js';

const Home = () => {
    return (
        <>
            <div class="outer-scrolling-container">
                <div class="scrolling-container">
                    <div class="scroller" data-direction="left" data-speed="fast">
                        <div class="scroller-inner">
                            <img src={images.pizza} alt="" />
                            <img src={images.burger} alt="" />
                            <img src={images.fries} alt="" />
                            <img src={images.gobi} alt="" />
                        </div>
                    </div>
                    <div class="scroller" data-direction="right" data-speed="slow">
                        <div class="scroller-inner">
                            <img src={images.masalapoori} alt="" />
                            <img src={images.dosa} alt="" />
                            <img src={images.samosa} alt="" />
                            <img src={images.butterchicken} alt="" />
                        </div>
                    </div>
                    <div class="scroller" data-direction="left" data-speed="fast">
                        <div class="scroller-inner">
                            <img src={images.jalebi} alt="" />
                            <img src={images.golgappa} alt="" />
                            <img src={images.naan} alt="" />
                            <img src={images.idli} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="home-options">
                <Link to="customers/browse-restaurants" class="home-option browse-restaurants">
                    <p>Browse Restaurants</p>
                    <p>Discover Flavor, Rate Service: Navigate Restaurants with Personalized Ratings.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
                        stroke="#172B4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-move-right">
                        <path d="M18 8L22 12L18 16" />
                        <path d="M2 12H22" />
                    </svg>
                </Link>
                <Link to="/launch-restaurant" class="launch-restaurants home-option">
                    <p>Want to launch a restaurant ?</p>
                    <p>Try our new AI-based restaurant opening predictive model to analyze the restaurant market in just one
                        click.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
                        stroke="#172B4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-move-right">
                        <path d="M18 8L22 12L18 16" />
                        <path d="M2 12H22" />
                    </svg>
                </Link>
            </div>
        </>
    )
}

export default Home;