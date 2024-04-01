import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './CustomerHome.css';

const BrowseRestaurants = ({ selectedLocation }) => {

	const [restaurants, setRestaurants] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(12); // Number of items per page
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {

		//call get all restaurants API
		const fetchRestaurants = async () => {
			try {
				const response = await fetch(`http://localhost:5000/customers/restaurants/getallrestaurant/${selectedLocation}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					},
				});
				const fetchedRestaurants = await response.json();

				if (fetchedRestaurants) {
					setRestaurants(fetchedRestaurants);
				}
			} catch (error) {
				console.error('Error fetching restaurants:', error);
			}
		}
		selectedLocation && fetchRestaurants();
	}, [selectedLocation])
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
		setCurrentPage(1);
	};

	const filteredRestaurants = restaurants
		? restaurants.filter(
			(restaurant) =>
				restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				restaurant.cuisines.toLowerCase().includes(searchTerm.toLowerCase())
		)
		: [];

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredRestaurants.slice(indexOfFirstItem, indexOfLastItem);

	const handleRestaurantClick = async (restaurant_id, name) => {
		try {
			// Get the current date
			const currentDate = new Date();

			// Format the date as dd-mm-yyyy
			const day = currentDate.getDate().toString().padStart(2, '0');
			const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
			const year = currentDate.getFullYear();

			const formattedDate = `${day}-${month}-${year}`;

			const response = await fetch(`http://localhost:5000/customers/orders/createNewOrder`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ customer_id: parseInt(localStorage.getItem('customerId')), restaurant_id: restaurant_id, name: name, location: selectedLocation, date: formattedDate })
			});
			const res = await response.json();

			if (res) {
				setRestaurants(res);
			}
		} catch (error) {
			console.error('Error creating orer:', error);
		}
	}

	return (
		<>
			<div className="search-bar">
				<input type="text" class="search" value={searchTerm} onChange={handleSearch} placeholder="Search for Restaurants or Cuisines" />
			</div>

			<div className="filters"></div>

			<div className="restaurants">
				{currentItems ? (
					currentItems.map((restaurant) => {
						// Convert cuisines string to an array
						const cuisinesArray = restaurant.cuisines.replace(/'/g, '').replace(/\[|\]/g, '').split(', ');
						const displayedCuisines = cuisinesArray.slice(0, 2);

						return (
							<Link key={restaurant.restaurant_id} to={`${restaurant.restaurant_id}`} onClick={() => handleRestaurantClick(restaurant.restaurant_id, restaurant.name)}>
								<div className="restaurant card">
									<div class="image" style={{
										backgroundImage: `url(${restaurant.image_url})`
									}}></div>
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

			{/* Pagination */}
			<div className="pagination">
				{Array.from({ length: Math.ceil(filteredRestaurants.length / itemsPerPage) }).map((_, index) => {
					const pageNumber = index + 1;

					// Display up to 5 pages, then show dots
					if (
						pageNumber === 1 ||
						pageNumber === currentPage ||
						(pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1) ||
						pageNumber === Math.ceil(filteredRestaurants.length / itemsPerPage)
					) {
						return (
							<button
								key={pageNumber}
								onClick={() => setCurrentPage(pageNumber)}
								className={pageNumber === currentPage ? 'page-button active' : 'page-button'}
							>
								{pageNumber}
							</button>
						);
					} else if (
						pageNumber === currentPage - 2 ||
						pageNumber === currentPage + 2
					) {
						// Show dots
						return (
							<span key={pageNumber} className="dots">
								...
							</span>
						);
					}

					return null;
				})}
			</div>
		</>
	)
}

export default BrowseRestaurants
