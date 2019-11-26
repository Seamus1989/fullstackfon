import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from './queries/queries'


function CommentQueries({id}) {
  console.log(id)
  const [input, setInput] = useState('')

  const handleInputChange = (e) =>{
    setInput({...input, [e.currentTarget.name]: e.currentTarget.value })
    console.log(input)
  }
  const [ addComment ] = useMutation(ADD_COMMENT);

  const submitData = (e) => {
    e.preventDefault();
    addComment({
      variables: { userName: input.username, content: input.content, postId : id },
      refetchQueries: ["GetAllPosts"]
    })
  }
  return (
    <>
      <div>
        <input
          className = "comment"
          type = "text"
          name = "content"
          contenteditable="true"
          placeholder = "Add your comment"
          onChange = {handleInputChange}
          ></input>
        <input
          type = "text"
          name = "username"
          contenteditable="true"
          placeholder = "user name"
          onChange = {handleInputChange}
          ></input>
        <button
          className="crossmark"
          onClick = {submitData}>
          Comment!
        </button>
      </div>
    </>
  )
}

export default CommentQueries;
