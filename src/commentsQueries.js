import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from './queries/queries'


function CommentQueries({id}) {
  const [input, setInput] = useState({username:"", content:""})

  const handleInputChange = (e) =>{
    setInput({...input, [e.currentTarget.name]: e.currentTarget.value })
  }

  const [ addComment ] = useMutation(ADD_COMMENT);

  const submitData = (e) => {
    e.preventDefault();
    addComment({
      variables: { userName: input.username, content: input.content, postId : id },
      refetchQueries: ["GetAllPosts"]
    }).then(() => setInput({username:"", content:""}))
  }
  return (
    <>
      <div className = "comment-input-container">
        <textarea
          className = "comment"
          name = "content"
          placeholder = "Add your comment"
          onChange = {handleInputChange}
          value = {input.content}
          ></textarea>
        <input
          className = "username"
          type = "text"
          name = "username"
          placeholder = "user name"
          onChange = {handleInputChange}
          value = {input.username}
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
