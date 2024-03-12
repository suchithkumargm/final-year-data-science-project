import React, { useState } from 'react';

import './PopUp.css';
import { useAppContext } from '../../../AppContext.js';

const PopupWithDropdown = ({ onSave }) => {
    const { locationPopup, setLocationPopup } = useAppContext();

    const [selectedLocation, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSaveClick = () => {
        // Call the onSave callback with the selected location
        localStorage.setItem('location',selectedLocation);
        setLocationPopup(!locationPopup);
        onSave(selectedLocation);
    };
    const locations = ["Select Location","BTM", "Banashankari", "Banaswadi", "Bannerghatta Road", "Basavanagudi", "Basaveshwara Nagar", "Bellandur", "Bommanahalli", "Brigade Road", "Brookefield", "CV Raman Nagar", "Central Bangalore", "Church Street", "City Market", "Commercial Street", "Cunningham Road", "Domlur", "East Bangalore", "Ejipura", "Electronic City", "Frazer Town", "HBR Layout", "HSR", "Hebbal", "Hennur", "Hosur Road", "ITPL Main Road, Whitefield", "Indiranagar", "Infantry Road", "JP Nagar", "Jakkur", "Jalahalli", "Jayanagar", "Jeevan Bhima Nagar", "KR Puram", "Kaggadasapura", "Kalyan Nagar", "Kammanahalli", "Kanakapura Road", "Kengeri", "Koramangala", "Koramangala 1st Block", "Koramangala 2nd Block", "Koramangala 3rd Block", "Koramangala 4th Block", "Koramangala 5th Block", "Koramangala 6th Block", "Koramangala 7th Block", "Koramangala 8th Block", "Kumaraswamy Layout", "Langford Town", "Lavelle Road", "MG Road", "Magadi Road", "Majestic", "Malleshwaram", "Marathahalli", "Mysore Road", "Nagarbhavi", "Nagawara", "New BEL Road", "North Bangalore", "Old Airport Road", "Old Madras Road", "Peenya", "RT Nagar", "Race Course Road", "Rajajinagar", "Rajarajeshwari Nagar", "Rammurthy Nagar", "Residency Road", "Richmond Road", "Sadashiv Nagar", "Sahakara Nagar", "Sanjay Nagar", "Sankey Road", "Sarjapur Road", "Seshadripuram", "Shanti Nagar", "Shivajinagar", "South Bangalore", "St. Marks Road", "Thippasandra", "Ulsoor", "Uttarahalli", "Varthur Main Road, Whitefield", "Vasanth Nagar", "Vijay Nagar", "West Bangalore", "Whitefield", "Wilson Garden", "Yelahanka", "Yeshwantpur"]

    return (
        <dialog open>
            <div>
                <h2>Select a Location</h2>
                <select value={selectedLocation} onChange={handleOptionChange} >
                    {locations.map((location) => (
                        <option key={location} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
                <div className='btn'>
                    <button onClick={handleSaveClick}>Save</button>
                </div>
            </div>
        </dialog>
    );
};

export default PopupWithDropdown;

// import React, { useState, useRef } from 'react';

// import './PopUp.css';

// const Popup = ({ onSave }) => {
//     const dialogRef = useRef(null);

//     const openDialog = () => {
//         if (dialogRef.current) {
//             dialogRef.current.showModal();
//         }
//     };

//     const closeDialog = () => {
//         if (dialogRef.current) {
//             dialogRef.current.close();
//         }
//     };

//     const [selectedLocation, setSelectedOption] = useState('');
//     const handleOptionChange = (event) => {
//         setSelectedOption(event.target.value);
//     };

//     const handleSaveClick = () => {
//         onSave(selectedLocation);
//         closeDialog(); // Close the popup after saving
//     };

//     const locations = [
//         "Select Location",
//         "BTM",
//         "Banashankari",
//         "Banaswadi",
//         "Bannerghatta Road",
//         "Basavanagudi",
//         "Basaveshwara Nagar",
//         "Bellandur",
//         "Bommanahalli",
//         "Brigade Road",
//         "Brookefield",
//         "CV Raman Nagar",
//         "Central Bangalore",
//         "Church Street",
//         "City Market",
//         "Commercial Street",
//         "Cunningham Road",
//         "Domlur",
//         "East Bangalore",
//         "Ejipura",
//         "Electronic City",
//         "Frazer Town",
//         "HBR Layout",
//         "HSR",
//         "Hebbal",
//         "Hennur",
//         "Hosur Road",
//         "ITPL Main Road, Whitefield",
//         "Indiranagar",
//         "Infantry Road",
//         "JP Nagar",
//         "Jakkur",
//         "Jalahalli",
//         "Jayanagar",
//         "Jeevan Bhima Nagar",
//         "KR Puram",
//         "Kaggadasapura",
//         "Kalyan Nagar",
//         "Kammanahalli",
//         "Kanakapura Road",
//         "Kengeri",
//         "Koramangala",
//         "Koramangala 1st Block",
//         "Koramangala 2nd Block",
//         "Koramangala 3rd Block",
//         "Koramangala 4th Block",
//         "Koramangala 5th Block",
//         "Koramangala 6th Block",
//         "Koramangala 7th Block",
//         "Koramangala 8th Block",
//         "Kumaraswamy Layout",
//         "Langford Town",
//         "Lavelle Road",
//         "MG Road",
//         "Magadi Road",
//         "Majestic",
//         "Malleshwaram",
//         "Marathahalli",
//         "Mysore Road",
//         "Nagarbhavi",
//         "Nagawara",
//         "New BEL Road",
//         "North Bangalore",
//         "Old Airport Road",
//         "Old Madras Road",
//         "Peenya",
//         "RT Nagar",
//         "Race Course Road",
//         "Rajajinagar",
//         "Rajarajeshwari Nagar",
//         "Rammurthy Nagar",
//         "Residency Road",
//         "Richmond Road",
//         "Sadashiv Nagar",
//         "Sahakara Nagar",
//         "Sanjay Nagar",
//         "Sankey Road",
//         "Sarjapur Road",
//         "Seshadripuram",
//         "Shanti Nagar",
//         "Shivajinagar",
//         "South Bangalore",
//         "St. Marks Road",
//         "Thippasandra",
//         "Ulsoor",
//         "Uttarahalli",
//         "Varthur Main Road, Whitefield",
//         "Vasanth Nagar",
//         "Vijay Nagar",
//         "West Bangalore",
//         "Whitefield",
//         "Wilson Garden",
//         "Yelahanka", 
//         "Yeshwantpur",
//     ];

//     return (
//         <Popup openDialog={openDialog}>
//             {/* Content of PopupWithDropdown */}
//             <h2 className="popup-title">Select an Option</h2>
//             <select value={selectedLocation} onChange={handleOptionChange}>
//                 {locations.map((location) => (
//                     <option key={location} value={location}>
//                         {location}
//                     </option>
//                 ))}
//             </select>
//             <button onClick={handleSaveClick}>Save</button>
//         </Popup>
//     );
// };

// export default Popup
