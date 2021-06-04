import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { createUser } from '../Graphql/Mutation';

const CrearUser = () => {
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
  
    const [crearUser] = useMutation(createUser)
    
    return (
        
             <div className="createUser">
        <input type="text"  placeholder="Ingresa tu Nombre" onChange={(e)=> {setName(e.target.value)}} />
        <input type="text" placeholder="Ingresa tu Nombre de Usuario"  onChange={(e)=> {setUserName(e.target.value)}} />
        <input type="text"  placeholder="Ingresa la Contraseña"  onChange={(e)=> {setPassword(e.target.value)}}/>
        <button onClick={()=> {crearUser({variables: {name, username,password}})}}>
          Crear Usuario
        </button>
      </div>
       
    )
}

export default CrearUser
