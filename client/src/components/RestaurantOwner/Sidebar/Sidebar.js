import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SidebarItem from './SidebarItem.js';
import './Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('');

  const menuItems = [
    'LocationVsCount',
    'OnlineOrderVsCount',
    'BookTableVsCount',
    'OnlineOrderVsRating',
    'BookTableVsRating',
    'LocationVsOnlineOrder',
    'LocationVsBookTable',
    'TypeVsRating',
    'LocationVsRatingVsType',
    'LocationVsVotes',
    'CuisinesVsVotes'
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