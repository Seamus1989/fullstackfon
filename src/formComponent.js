import React, { useState } from 'react';
import Posts from './form'
import { useMutation } from '@apollo/react-hooks';

import { POST_MUTATION } from './queries/queries'

function FormComponent() {
  const [input, setInput] = useState('')
  const handleInputChange = (e) =>{
    setInput({...input, [e.currentTarget.name]: e.currentTarget.value })
    console.log(input)
  }
  const [ addPost ] = useMutation(POST_MUTATION);

  const submitData = (e) => {
    e.preventDefault();
    addPost({
      variables: { userName: input.username, content: input.content },
      refetchQueries: ["GetAllPosts"]
    })
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
        className = "input-post"
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
export default FormComponent;
