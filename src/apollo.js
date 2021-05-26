import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { persistCache } from 'apollo-cache-persist';
import { WebSocketLink } from 'apollo-link-ws';
// import { persistCacheSync, LocalStorageWrapper } from 'apollo3-cache-persist';

const APOLLO_URI = process.env.REACT_APP_APOLLO_URI;
const WSS_URI = process.env.REACT_APP_WSS_URI;
const ADMIN_SECRET = process.env.REACT_APP_HASURA_ADMIN_SECRET;

const httpLink = createHttpLink({
    uri: APOLLO_URI,
    headers: {
        'x-hasura-admin-secret': ADMIN_SECRET
    }
})

const wsLink = new WebSocketLink({
    uri: WSS_URI,
    options: {
        timeout: 30000,
        reconnect: true,
        connectionParams: {
            headers: {
                'x-hasura-admin-secret': ADMIN_SECRET
            }
        } 
    }
})

const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return (
        kind === 'OperationDefinition' &&
        operation === 'subscription'
      );
    },
    wsLink,
    httpLink
);

const cache = new InMemoryCache();

// persistCacheSync({
//     cache,
//     storage: new LocalStorageWrapper(window.localStorage),
// });

persistCache({
    cache,
    storage: window.localStorage
})

export const client = new ApolloClient({
    link,
    cache
})