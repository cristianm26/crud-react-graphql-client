import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { updateUserPassword } from '../Graphql/Mutation';

const UpdatePassword = () => {
    const [username, setUsername] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [updatePassword, {error}] = useMutation(updateUserPassword)
    if (error) {
            return <h1>{error}</h1>
    }
    return (
        <div>
            <input type="text" placeholder="Nombre de Usuario" onChange={(e)=>{setUsername(e.target.value)}} />
            <input type="password"  placeholder="Ingrese la antigua Contraseña"  onChange={(e)=>{setOldPassword(e.target.value)}} />
            <input type="password"  placeholder="Ingrese la nueva Contraseña"  onChange={(e)=>{setNewPassword(e.target.value)}} />
        <button onClick={()=>{updatePassword({variables: {username, oldPassword, newPassword}})}}>
            Actualizar Contraseña
        </button>
        </div>
    )
}

export default UpdatePassword
