import React from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import {
    GetMenuItemsVars,
    MenuItemEntity,
    NormalizedDataItem,
    renderLinkLinesProps,
    useMapMenuItemsProps,
    useNormalizeDataProps,
} from './types';
const MAX_LINE_LENGTH = 12;

export const initialGetMenuItemsValues: GetMenuItemsVars = {
    filters: {},
    pagination: {},
    sort: [],
};

const normalizeUrl = (url: string): string =>
    url.includes('/') ? url : `/${url}`;

const formatText = (text: string) => {
    if (text.length > MAX_LINE_LENGTH) return text.split(' ');
    return [text];
};

export const useNormalizeData = ({ dataReady, data }: useNormalizeDataProps) =>
    useMemo(() => {
        return dataReady
            ? data?.menuItems?.data?.map((i: MenuItemEntity) => {
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

const renderLinkLines = ({
    title,
    id,
    url,
}: renderLinkLinesProps): React.ReactNode => {
    return title?.length
        ? title.map((line: string) => {
              return (
                  <Link
                      key={`${id}${line}`}
                      to={url}
                      className="menu__list-item-link"
                  >
                      <p className="menu__list-item-link-text">{line}</p>
                  </Link>
              );
          })
        : null;
};

export const useMapMenuItems = ({
    normalizedData,
    pathname,
}: useMapMenuItemsProps) =>
    useMemo(() => {
        return normalizedData?.map((i: NormalizedDataItem) => {
            const { title, url } = i.attributes;
            const isActive = pathname === url;
            const linkLines = renderLinkLines({ title, url, id: i.id });

            return (
                <MenuItem
                    key={i.id}
                    title={title}
                    url={url}
                    isActive={isActive}
                >
                    {linkLines}
                </MenuItem>
            );
        });
    }, [normalizedData, pathname]);
