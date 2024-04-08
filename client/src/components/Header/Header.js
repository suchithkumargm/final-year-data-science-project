import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import { useAppContext } from '../../AppContext.js';

const Header = () => {

    const { locationPopup, setLocationPopup } = useAppContext();

    const handleLogout = () => {
        // Remove the 'token' from localStorage when logging out
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('customerId');
        localStorage.removeItem('location');
        // Update isLoggedIn state to false
        // Redirect to home page after logout
        window.location.href = "/";
    };

    const displayLocationPopup = () => {
        setLocationPopup(!locationPopup);
    }

    // Update isLoggedIn state on component mount
    useEffect(() => {
    }, [localStorage.getItem('token')]);

    return (
        <header>
            <div className="brand">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#172B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-soup">
                        <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
                        <path d="M7 21h10" />
                        <path d="M19.5 12 22 6" />
                        <path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" />
                        <path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" />
                        <path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" />
                    </svg>
                </Link>
                <p className="brand-name"><Link to="/">Zomato Help</Link></p>
            </div>
            <div className="authentication">
                {localStorage.getItem('token') ? (
                    <>
                        <Link className='location' onClick={displayLocationPopup}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            {localStorage.getItem('location') ? localStorage.getItem('location') : 'location'}</Link>
                        <button className="auth" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/customer/login"><button className="auth">Login</button></Link>
                        <Link to="/customer/createCustomer"><button className="auth">Sign Up</button></Link>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header;
