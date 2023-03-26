import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
const MAX_LINE_LENGTH = 12;

export const initialGetMenuItemsValues = {
    filters: {},
    pagination: {},
    sort: [],
};

const normalizeUrl = (url) => (url.includes('/') ? url : `/${url}`);
const formatText = (text) => {
    if (text.length > MAX_LINE_LENGTH) return text.split(' ');
    return [text];
};

export const useNormalizeData = ({ dataReady, data }) =>
    useMemo(() => {
        return dataReady
            ? data?.menuItems?.data?.map((i) => {
                  return {
                      ...i,
                      attributes: {
                          ...i.attributes,
                          url: normalizeUrl(i.attributes.url),
                          title: formatText(i.attributes.title),
                      },
                  };
              })
            : [];
    }, [data, dataReady]);

export const useMapMenuItems = ({ normalizedData, pathname }) =>
    useMemo(() => {
        return normalizedData.map((i) => {
            const { title, url } = i.attributes;
            const isActive = pathname === url;

            const renderLinkLines = (() => {
                return title?.length
                    ? title.map((line) => {
                          return (
                              <Link
                                  key={`${i.id}${line}`}
                                  to={url}
                                  className="menu__list-item-link"
                              >
                                  <p className="menu__list-item-link-text">
                                      {line}
                                  </p>
                              </Link>
                          );
                      })
                    : null;
            })();

            return (
                <MenuItem
                    key={i.id}
                    title={title}
                    url={url}
                    isActive={isActive}
                >
                    {renderLinkLines}
                </MenuItem>
            );
        });
    }, [normalizedData, pathname]);
