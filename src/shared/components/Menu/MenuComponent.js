import React from 'react';
import { normalizeUrl } from './helpers';
import MenuItem from './MenuItem';
import './styles.scss';

const MenuComponent = ({ dataReady, data, pathname }) => (
    <div className="menu">
        <ul className="menu__list">
            {dataReady
                ? data.menuItems.data.map((itemData) => {
                      const { title, url } = itemData.attributes;
                      const normalizedUrl = normalizeUrl(url);
                      return (
                          <MenuItem
                              key={itemData.id}
                              title={title}
                              url={normalizedUrl}
                              pathname={pathname}
                          />
                      );
                  })
                : null}
        </ul>
    </div>
);

export default MenuComponent;
