import { gql } from '@apollo/client';

export const getUsers = gql`
    query getUsers {
        getUsers{ 
            id
            name
            username
        }
    }
`