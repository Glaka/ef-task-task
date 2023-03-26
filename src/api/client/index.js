import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
    typePolicies: {
        ActivityFeedEntityReference: {
            keyFields: false,
        },
        PermissionDefinition: {
            keyFields: false,
        },
        RoleTemplatePermission: {
            keyFields: false,
        },
    },
});

const link = new HttpLink({
    uri: 'https://test-task.entireframework.com/cms/graphql',
});

const client = new ApolloClient({
    uri: 'https://test-task.entireframework.com/cms/graphql',
    cache,
    link,
});

export default client;
