import React from 'react';

import FormComponent from './formComponent'
import HeadsUp from './headsUp'

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

function App() {
  return (
    <ApolloProvider client = {client}>
      <HeadsUp/>
      <FormComponent/>
    </ApolloProvider>
  );
}


export default App;
