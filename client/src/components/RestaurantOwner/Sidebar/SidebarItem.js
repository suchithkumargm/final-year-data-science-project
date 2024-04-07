import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ itemName, activeItem, handleItemClick }) => (
    <li className={`${activeItem === itemName ? 'active' : ''} list__item`} onClick={() => handleItemClick(itemName)}>
        <Link to={`${itemName.toLowerCase()}`}>
            {itemName}
        </Link>
    </li>
);

export default SidebarItem;