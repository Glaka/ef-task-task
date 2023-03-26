import { useQuery } from '@apollo/client';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { GET_MENU_ITEMS } from 'api/queries';
import {
    initialGetMenuItemsValues,
    useMapMenuItems,
    useNormalizeData,
} from './helpers';
import MenuComponent from './MenuComponent';
import ErrorMessage from '../ErrorMessage';

const MenuContainer = () => {
    const { data, loading, error } = useQuery(GET_MENU_ITEMS, {
        variables: initialGetMenuItemsValues,
    });
    const { pathname } = useLocation();
    const dataReady = useMemo(
        () => !loading && data?.menuItems?.data?.length,
        [data?.menuItems?.data?.length, loading]
    );

    const normalizedData = useNormalizeData({ dataReady, data });
    const mappedMenuItems = useMapMenuItems({ normalizedData, pathname });

    if (error) return <ErrorMessage errorText={error} />;
    return <MenuComponent>{mappedMenuItems}</MenuComponent>;
};

export default MenuContainer;
