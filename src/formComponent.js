import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

function FormComponent() {
  const [input, setInput] = useState('')
  const handleInputChange = (e) =>{
    setInput({...input, [e.currentTarget.name]: e.currentTarget.value })
    console.log(input)
  }
  const submitData = () => {

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
        name = "password"
        onChange = {handleInputChange}
        ></textarea>

        <button
            onClick = {submitData}
            className = "submit-button">
          Submit Post
        </button>
      </div>

    </>
  )
}

export default FormComponent;
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
