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
                            <img src="../images/pizza.avif" alt="" />
                            <img src="../images/burger.jpeg" alt="" />
                            <img src="../images/fries.jpeg" alt="" />
                            <img src="../images/gobi.jpeg" alt="" />
                        </div>
                    </div>
                    <div class="scroller" data-direction="right" data-speed="slow">
                        <div class="scroller-inner">
                            <img src="../images/masalapoori.jpeg" alt="" />
                            <img src="../images/dosa.jpeg" alt="" />
                            <img src="../images/samosa.jpeg" alt="" />
                            <img src="../images/butterchicken.jpeg" alt="" />
                        </div>
                    </div>
                    <div class="scroller" data-direction="left" data-speed="fast">
                        <div class="scroller-inner">
                            <img src="../images/jalebi.jpeg" alt="" />
                            <img src="../images/golgappa.jpeg" alt="" />
                            <img src="../images/naan.jpeg" alt="" />
                            <img src="../images/idli.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="home-options">
                <Link to="#" class="home-option browse-restaurants">
                    <p>Browse Restaurants</p>
                    <p>Discover Flavor, Rate Service: Navigate Restaurants with Personalized Ratings.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
                        stroke="#172B4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-move-right">
                        <path d="M18 8L22 12L18 16" />
                        <path d="M2 12H22" />
                    </svg>
                </Link>
                <Link to="#" class="launch-restaurants home-option">
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