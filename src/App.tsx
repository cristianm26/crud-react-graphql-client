import React from 'react'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import CrearUser from './components/CrearUser';
import ListUser from './components/ListUser';
import UpdatePassword from './components/UpdatePassword';
const App = () => {
 

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache:new InMemoryCache()
  })
  return (
    <>
    <ApolloProvider client={client}>
     <CrearUser/>
     <ListUser/>
     <UpdatePassword/>
    </ApolloProvider>
    </>
  )
}

export default App
