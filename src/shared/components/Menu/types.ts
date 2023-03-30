
export type useMapMenuItemsProps = {
    normalizedData: NormalizedData;
    pathname: string;
};

type MenuItem = {
    title: string
    url: string
}

export type MenuItemEntity = {
    id: string
    attributes: MenuItem
}


export interface GetMenuItemsData {
    menuItems: {
        data: MenuItemEntity[];
    };
}

export interface NormalizedDataItem {
    id: string,
    attributes: {
        title: string[];
        url: string;
    }
}

export type NormalizedData = NormalizedDataItem[] | undefined;


export interface GetMenuItemsVars {
    filters: {};
    pagination: {};
    sort: [];
}

export type MenuComponentProps = {
    children: React.ReactNode;
};

export type MenuItemProps = {
    isActive: boolean;
    children: React.ReactNode;
    title: string[];
    url: string;
};

export interface useNormalizeDataProps {
    dataReady: boolean;
    data: GetMenuItemsData | undefined;
}

export interface renderLinkLinesProps {
    title: string[];
    id: string;
    url: string;
}
