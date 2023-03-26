import React from 'react';
import './styles.scss';

const MenuComponent = ({ children }) => (
    <div className="menu">
        <ul className="menu__list">{children}</ul>
    </div>
);

export default MenuComponent;
