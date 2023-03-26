import React from 'react';

const MenuItem = ({ isActive, children }) => (
    <li
        className={`menu__list-item ${
            isActive ? 'menu__list-item--active' : ''
        }`}
    >
        {children}
    </li>
);

export default MenuItem;
