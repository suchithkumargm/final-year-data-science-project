import React, { useState } from 'react';
import { useNavigate } from'react-router-dom';

import SidebarItem from './SidebarItem.js';
import './Sidebar.css';

const Sidebar = () => {

  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState('');

  const menuItems = [
    'Location Vs Count',
    'Online Order Vs Count',
    'Top 10 Restaurant Vs vote',
    'Top 10 Dishes Liked Vs vote',
    'Restaurant Vs Count',
    // 'CorrelationHeatmap',
    'Online Order Vs Rating',
    'Density Vs Rating',
    'Location Vs Book Table',
    // 'Type Vs Rating',
    // 'Location Vs Rating Vs Type',
    // 'Cuisines Vs Votes'
  ];

  const handleItemClick = (itemName) => {
    navigate(`analysis/${itemName.toLowerCase().replace(/\s+/g, '-')}`);
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
      {/* <div className="report-btn">
					<input className="s-btn" type="submit" value="Get Report" />
			</div> */}
    </div>
  );
};

export default Sidebar;