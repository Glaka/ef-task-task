export const initialGetMenuItemsValues = {
    filters: {},
    pagination: {},
    sort: [],
};

export const normalizeUrl = (url) => (url.includes('/') ? url : `/${url}`);
