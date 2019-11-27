import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from './queries/queries'


function CommentQueries({id}) {
  const [input, setInput] = useState('')

  const handleInputChange = (e) =>{
    setInput({...input, [e.currentTarget.name]: e.currentTarget.value })
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
      <div className = "comment-input-container">
        <textarea
          className = "comment"
          name = "content"
          placeholder = "Add your comment"
          onChange = {handleInputChange}
          ></textarea>
        <input
          className = "username"
          type = "text"
          name = "username"
          placeholder = "user name"
          onChange = {handleInputChange}
          ></input>
        <button
          className="crossmark"
          onClick = {(e) => submitData(e)}>
          Comment!
        </button>
      </div>
    </>
  )
}

export default CommentQueries;
