import { useMemo } from 'react';
import MenuItem from './MenuItem';

export const initialGetMenuItemsValues = {
    filters: {},
    pagination: {},
    sort: [],
};

const normalizeUrl = (url) => (url.includes('/') ? url : `/${url}`);

export const useNormalizeData = ({ dataReady, data }) =>
    useMemo(() => {
        return dataReady
            ? data?.menuItems?.data?.map((i) => {
                  return {
                      ...i,
                      attributes: {
                          ...i.attributes,
                          url: normalizeUrl(i.attributes.url),
                      },
                  };
              })
            : [];
    }, [data, dataReady]);

export const useMapMenuItems = ({ normalizedData, pathname }) =>
    useMemo(() => {
        return normalizedData.map((i) => {
            const { title, url } = i.attributes;
            return (
                <MenuItem
                    key={i.id}
                    title={title}
                    url={url}
                    pathname={pathname}
                />
            );
        });
    }, [normalizedData, pathname]);
