import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ title, url, pathname }) => {
    return (
        <li className={`menu--list-item ${pathname === url ? '--active' : ''}`}>
            <Link to={url} className="menu--list-item-link">
                {title}
            </Link>
        </li>
    );
};

export default MenuItem;
