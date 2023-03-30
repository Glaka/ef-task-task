import React from 'react';
import './styles.scss';
import { MenuComponentProps } from './types';

const MenuComponent: React.FC<MenuComponentProps> = ({ children }) => (
    <div className="menu">
        <ul className="menu__list">{children}</ul>
    </div>
);

export default MenuComponent;
