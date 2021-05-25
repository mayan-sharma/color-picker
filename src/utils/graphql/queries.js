import { gql } from '@apollo/client';

export const GET_ALL_COLORS_QUERY = gql`
    query GET_ALL_COLORS_QUERY {
        colors {
            id,
            label,
            hex,
            rgb
        }
    }
`;