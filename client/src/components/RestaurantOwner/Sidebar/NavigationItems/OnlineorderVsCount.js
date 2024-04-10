import React ,{ useState, useEffect }from 'react';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import './OnlineorderVsCount.css';

const OnlineorderVsCount = ({ location }) => {
    const [topRestaurants, setTopRestaurants] = useState([]);

  useEffect(() => {
    const fetchTopRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:5000/restaurantOwner/getRestaurantDetails/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTopRestaurants(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTopRestaurants();
  }, [location]);

  const restaurantNames = topRestaurants.map(restaurant => restaurant.name);
  const votes = topRestaurants.map(restaurant => restaurant.votes);

  const chartData = {
    labels: restaurantNames,
    datasets: [{
      label: 'Votes',
      data: votes,
      backgroundColor: 'skyblue',
    }],
  };

  return (
    <div>
      <h2>Top 10 Restaurants in {location}</h2>
      <Bar data={chartData} />
    </div>
  );
};
export default OnlineorderVsCount;