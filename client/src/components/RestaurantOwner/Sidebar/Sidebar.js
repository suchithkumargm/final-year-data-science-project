import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SidebarItem from './SidebarItem.js';
import './Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('');

  const menuItems = [
    'Location Vs Count',
    'Online Order Vs Count',
    'Book Table Vs Count',
    'Online Order Vs Rating',
    'Book Table Vs Rating',
    'Location Vs Online Order',
    'Location Vs Book Table',
    'Type Vs Rating',
    'Location Vs Rating Vs Type',
    'Location Vs Votes',
    'Cuisines Vs Votes'
  ];

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="sidebar bg-secondary">
      <ul className="list__items text-primary">
        {menuItems.map((itemName) => (
          <SidebarItem
            key={itemName}
            itemName={itemName}
            activeItem={activeItem}
            handleItemClick={handleItemClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;