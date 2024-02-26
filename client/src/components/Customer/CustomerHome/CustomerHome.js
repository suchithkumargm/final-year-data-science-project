import React, { useState ,useEffect} from 'react';

import './CustomerHome.css';

const CustomerHome = () => {

    const [restaurants,setRestaurants]=useState([]);

    useEffect(() => {
		// Fetch restaurants when the component mounts
		async function fetchRestaurants() {
			try {
				const response = await fetch('http://localhost:5000/restaurants/trainrestaurants/getuserrestaurants', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				});

				if (response.ok) {
					const json = await response.json();
					setRestaurants(json);
				} else {
					console.error('Failed to fetch restaurants');
				}
			} catch (error) {
				console.error('Error fetching restaurants:', error);
			}
		}

		fetchRestaurants();
	}, []); // Empty dependency array to run this effect once when the component mounts

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
                <Link>
                    <div class="restaurant card">
                        <div class="image"></div>
                        <div class="details">
                            <h3 class="hotel">Hotel Name</h3>
                            <p class="location"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>Kengeri</p>
                            <ul class="cuisines">
                                <li>Burger</li>
                                <li>Pizza</li>
                                <li>Rice</li>
                            </ul>
                            <div class="ratings">
                                <div class="rating">Food : 3⭐</div>
                                <div class="rating">Service : 4⭐</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div class="restaurant card">
                        <div class="image"></div>
                        <div class="details">
                            <h3 class="hotel">Hotel Name</h3>
                            <p class="location"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>Kengeri</p>
                            <ul class="cuisines">
                                <li>Burger</li>
                                <li>Pizza</li>
                                <li>Rice</li>
                            </ul>
                            <div class="ratings">
                                <div class="rating">Food : 3⭐</div>
                                <div class="rating">Service : 4⭐</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div class="restaurant card">
                        <div class="image"></div>
                        <div class="details">
                            <h3 class="hotel">Hotel Name</h3>
                            <p class="location"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>Kengeri</p>
                            <ul class="cuisines">
                                <li>Burger</li>
                                <li>Pizza</li>
                                <li>Rice</li>
                            </ul>
                            <div class="ratings">
                                <div class="rating">Food : 3⭐</div>
                                <div class="rating">Service : 4⭐</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div class="restaurant card">
                        <div class="image"></div>
                        <div class="details">
                            <h3 class="hotel">Hotel Name</h3>
                            <p class="location"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>Kengeri</p>
                            <ul class="cuisines">
                                <li>Burger</li>
                                <li>Pizza</li>
                                <li>Rice</li>
                            </ul>
                            <div class="ratings">
                                <div class="rating">Food : 3⭐</div>
                                <div class="rating">Service : 4⭐</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div class="restaurant card">
                        <div class="image"></div>
                        <div class="details">
                            <h3 class="hotel">Hotel Name</h3>
                            <p class="location"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>Kengeri</p>
                            <ul class="cuisines">
                                <li>Burger</li>
                                <li>Pizza</li>
                                <li>Rice</li>
                            </ul>
                            <div class="ratings">
                                <div class="rating">Food : 3⭐</div>
                                <div class="rating">Service : 4⭐</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div class="restaurant card">
                        <div class="image"></div>
                        <div class="details">
                            <h3 class="hotel">Hotel Name</h3>
                            <p class="location"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>Kengeri</p>
                            <ul class="cuisines">
                                <li>Burger</li>
                                <li>Pizza</li>
                                <li>Rice</li>
                            </ul>
                            <div class="ratings">
                                <div class="rating">Food : 3⭐</div>
                                <div class="rating">Service : 4⭐</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div class="restaurant card">
                        <div class="image"></div>
                        <div class="details">
                            <h3 class="hotel">Hotel Name</h3>
                            <p class="location"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>Kengeri</p>
                            <ul class="cuisines">
                                <li>Burger</li>
                                <li>Pizza</li>
                                <li>Rice</li>
                            </ul>
                            <div class="ratings">
                                <div class="rating">Food : 3⭐</div>
                                <div class="rating">Service : 4⭐</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div class="restaurant card">
                        <div class="image"></div>
                        <div class="details">
                            <h3 class="hotel">Hotel Name</h3>
                            <p class="location"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>Kengeri</p>
                            <ul class="cuisines">
                                <li>Burger</li>
                                <li>Pizza</li>
                                <li>Rice</li>
                            </ul>
                            <div class="ratings">
                                <div class="rating">Food : 3⭐</div>
                                <div class="rating">Service : 4⭐</div>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        </>
    )
}

export default CustomerHome;