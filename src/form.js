import React, { useState } from 'react';
import CommentQueries from './commentsQueries'
import Comments from './comments.js'
import { useQuery } from '@apollo/react-hooks';
import { GET_POSTS } from './queries/queries';

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
            <div className = "contain-buttons">
              <p className = "actual-post" key = {e._id}><b>{e.userName}</b>: {e.content}</p>
              <div>
                <Comments id = {e._id} comments = {e.comments}/>
              </div>
              <div>
                <CommentQueries id = {e._id}/>
              </div>
            </div>
          </>
        )
      })
    }
    </>
  );
}
export default Posts;
