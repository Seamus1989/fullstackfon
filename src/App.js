import React from 'react';

import FormComponent from './formComponent'
import HeadsUp from './headsUp'

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';



const client = new ApolloClient({
  uri : 'http://localhost:4000/graphql'
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

/*
const query = gql`
  {
    getAllPosts {
      content
    }
  }
`;




function Thing() {
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return <div>fg</div>//data.getUserPosts.map((e) => <li>{e.content}</li>)
}




We have two routes
  posts (all posts with likes and comments)
  users (shows all posts by particular user)
    on each post we can see posts

we have fields for
  username
  Post content
*/
