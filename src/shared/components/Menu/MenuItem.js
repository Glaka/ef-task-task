import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ title, url, pathname }) => (
    <li
        className={`menu__list-item ${
            pathname === url ? 'menu__list-item--active' : ''
        }`}
    >
        <Link to={url} className="menu__list-item-link">
            {title}
        </Link>
    </li>
);

export default MenuItem;
