import { useQuery } from '@apollo/client';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { GET_MENU_ITEMS } from 'api/queries';
import { initialGetMenuItemsValues } from './helpers';
import MenuComponent from './MenuComponent';

const MenuContainer = () => {
    const { data, loading, error } = useQuery(GET_MENU_ITEMS, {
        variables: initialGetMenuItemsValues,
    });
    const { pathname } = useLocation();

    if (error) {
        console.error(error);
        return <div>Error loading menu items</div>;
    }

    const dataReady = !loading && data?.menuItems?.data?.length;

    return (
        <MenuComponent dataReady={dataReady} data={data} pathname={pathname} />
    );
};

export default MenuContainer;
