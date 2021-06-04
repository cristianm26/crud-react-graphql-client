import { gql } from '@apollo/client';

export const createUser = gql`
    mutation createUser(
        $name: String! 
        $username: String! 
        $password: String! 
        ){
        createUser(
            name:$name 
            username:$username
            password:$password
        ){
            id
            name
            username
        }
    }
`

export const updateUserPassword = gql`
mutation updatePassword(
    $username: String! 
    $oldPassword: String! 
    $newPassword: String! 
    ){
        updatePassword(
        username:$username 
        oldPassword:$oldPassword
        newPassword:$newPassword
        
    ){
        message
    }
}
`

export const deleteUserID = gql`
    mutation deleteUser($id: ID!){
        deleteUser(id: $id){
            message
        }
    }
`