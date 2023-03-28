import { gql } from 'graphql-tag';

const GET_MENU_ITEMS = gql`
    query menuItems(
        $filters: MenuItemFiltersInput!
        $pagination: PaginationArg! = {}
        $sort: [String] = []
    ) {
        menuItems(filters: $filters, pagination: $pagination, sort: $sort) {
            data {
                id
                attributes {
                    title
                    url
                }
            }
        }
    }
`;

export default GET_MENU_ITEMS;
