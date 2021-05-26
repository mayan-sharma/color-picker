import gql from "graphql-tag";

export const SUBSCRIBE_COLOR_ADDED = gql`
    subscription SUBSCRIBE_COLOR_ADDED {
        colors {
            id,
            label,
            hex,
            rgb
        }
    }
`;