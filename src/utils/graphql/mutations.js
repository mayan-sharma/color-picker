import { gql } from '@apollo/client';

export const CREATE_COLOR_MUTATION = gql`
    mutation CREATE_COLOR_MUTATION($object: colors_insert_input!) {
        insert_colors_one(object: $object) {
            id,
            label,
            hex,
            rgb
        }
    }
`;

export const UPDATE_LABEL_MUTATION = gql`
    mutation UPDATE_LABEL_MUTATINO($id: Int!, $label: String!) {
        update_colors_by_pk(pk_columns: {id: $id}, _set: {label: $label}) {
            id,
            label
            hex
            rgb
        }
    }
`;

export const DELETE_COLOR_MUTATION = gql`
    mutation CREATE_COLOR_MUTATION($id: Int!) {
        delete_colors_by_pk(id: $id) {
            id
            label
            hex
            rgb
        }
    }
`;