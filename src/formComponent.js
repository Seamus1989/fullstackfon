import React, { useState } from 'react';
import { gql } from "apollo-boost";
import { useMutation, useQuery } from '@apollo/react-hooks';
import { onError } from "apollo-link-error";

const link = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const POST_MUTATION = gql`
  mutation AddPost($content: String!, $userName: String!) {
    addPost(content: $content, userName: $userName) {
      _id
      content
      likes
    }
  }
`;
const GET_POSTS = gql`
 {
    getAllPosts {
      content
      _id
      likes
    }
  }
`;
function FormComponent() {
  const [input, setInput] = useState('')
  const handleInputChange = (e) =>{
    setInput({...input, [e.currentTarget.name]: e.currentTarget.value })
    console.log(input)
  }
  const [addPost, { data }] = useMutation(POST_MUTATION);

  const submitData = (e) => {
    e.preventDefault();
    addPost({ variables: { userName: input.username, content: input.content } })
  }
  return (
    <>
      <div className = "form-fields">
        <input
          className = "input-username"
          placeholder = "username"
          type = "text"
          name = "username"
          onChange = {handleInputChange}
          ></input>

        <textarea
        className = "input-comment"
        placeholder = "enter a post..."
        name = "content"
        onChange = {handleInputChange}
        ></textarea>

        <button
            onClick = {submitData}
            className = "submit-button">
          Submit Post
        </button>
      </div>
        <Posts/>
      <div>

      </div>

    </>
  )
}
function Posts() {
  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading) return null;
  if (error) return `Error! ${error.message}`;

  return (
    <>
    {
      data.getAllPosts.map((e) => {
        return (
          <>
            <p key = {e._id}>{e.content}</p>
            <input type = "text" placeholder = "add your comment"></input>
          </>
        )
      })
    }
    </>
  );
}
export default FormComponent;
/*
Next we need to look at updating the cache upon making these mutations
*/
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
type Posts {
  id: ID!
  content: String!
  userName: String!
  likes: Int
}
*/
