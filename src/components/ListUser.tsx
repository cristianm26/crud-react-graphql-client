
import React from 'react'
import { getUsers } from '../Graphql/Queries';
import { useMutation, useQuery } from '@apollo/client'
import {  deleteUserID } from '../Graphql/Mutation';
const ListUser = () => {
    const {data} = useQuery(getUsers);
    const [deleteUser] = useMutation(deleteUserID)
  
    return (
     
      <div>
        {data && 
         (data.getUsers.map((user: any)=>{
            return <div key={user.id}>
                {user.name} - {user.username}
                <button onClick={()=>{deleteUser({variables: {id:user.id}})}}>Eliminar Usuario</button>
            </div>
         }))
        }
        </div>
    )
}

export default ListUser
