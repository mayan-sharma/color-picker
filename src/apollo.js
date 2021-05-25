import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: process.env.REACT_APOLLO_URI,
    cache: new InMemoryCache()
})