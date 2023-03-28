import React from 'react';
import { MenuItemProps } from './types';

const MenuItem: React.FC<MenuItemProps> = ({ isActive, children }) => (
    <li
        className={`menu__list-item ${
            isActive ? 'menu__list-item--active' : ''
        }`}
    >
        {children}
    </li>
);

export default MenuItem;
