import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useNavigate } from 'react-router-dom';

import './SelectLocation.css'

const SelectLocation = () => {
    const navigate = useNavigate();

    const locations = ["Select Location", "BTM", "Banashankari", "Banaswadi", "Bannerghatta Road", "Basavanagudi", "Basaveshwara Nagar", "Bellandur", "Bommanahalli", "Brigade Road", "Brookefield", "CV Raman Nagar", "Central Bangalore", "Church Street", "City Market", "Commercial Street", "Cunningham Road", "Domlur", "East Bangalore", "Ejipura", "Electronic City", "Frazer Town", "HBR Layout", "HSR", "Hebbal", "Hennur", "Hosur Road", "ITPL Main Road, Whitefield", "Indiranagar", "Infantry Road", "JP Nagar", "Jakkur", "Jalahalli", "Jayanagar", "Jeevan Bhima Nagar", "KR Puram", "Kaggadasapura", "Kalyan Nagar", "Kammanahalli", "Kanakapura Road", "Kengeri", "Koramangala", "Koramangala 1st Block", "Koramangala 2nd Block", "Koramangala 3rd Block", "Koramangala 4th Block", "Koramangala 5th Block", "Koramangala 6th Block", "Koramangala 7th Block", "Koramangala 8th Block", "Kumaraswamy Layout", "Langford Town", "Lavelle Road", "MG Road", "Magadi Road", "Majestic", "Malleshwaram", "Marathahalli", "Mysore Road", "Nagarbhavi", "Nagawara", "New BEL Road", "North Bangalore", "Old Airport Road", "Old Madras Road", "Peenya", "RT Nagar", "Race Course Road", "Rajajinagar", "Rajarajeshwari Nagar", "Rammurthy Nagar", "Residency Road", "Richmond Road", "Sadashiv Nagar", "Sahakara Nagar", "Sanjay Nagar", "Sankey Road", "Sarjapur Road", "Seshadripuram", "Shanti Nagar", "Shivajinagar", "South Bangalore", "St. Marks Road", "Thippasandra", "Ulsoor", "Uttarahalli", "Varthur Main Road, Whitefield", "Vasanth Nagar", "Vijay Nagar", "West Bangalore", "Whitefield", "Wilson Garden", "Yelahanka", "Yeshwantpur"]
    const [selectedLocation, setSelectedLocation] = useState('');
    const topLocations = [{"location":"Whitefield","count":597},{"location":"HSR","count":459},{"location":"Marathahalli","count":439},{"location":"Electronic City","count":367},{"location":"BTM","count":358},{"location":"Indiranagar","count":355},{"location":"JP Nagar","count":335},{"location":"Bannerghatta Road","count":307},{"location":"Jayanagar","count":262},{"location":"Sarjapur Road","count":231}];

    const labels = topLocations.map(item => item.location);
    const counts = topLocations.map(item => item.count);

    const handleOptionChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const onSave = () => {
        navigate("analysis");
    }

    return (
        <>
            <div className="restaurant-owner">
                <h2>These are the Top Locations in Bangalore</h2>
                <div className="graph">
                    <Bar
                        data={{
                            labels: labels,
                            datasets: [
                                {
                                    label: 'Number of Restaurants',
                                    data: counts,
                                    backgroundColor: 'rgba(75,192,192,0.2)',
                                    borderColor: 'rgba(75,192,192,1)',
                                    borderWidth: 1,
                                },
                            ],
                        }}
                        options={{
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                    },
                                ],
                            },
                        }}
                    />
                </div>

                <div className="select-location">
                    <h2>Want to get more Analysis like these?
                        Select a Location</h2>
                    <select value={selectedLocation} onChange={handleOptionChange} >
                        {locations.map((location) => (
                            <option key={location} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>
                    <div className='btn'>
                        <button onClick={onSave}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SelectLocation;