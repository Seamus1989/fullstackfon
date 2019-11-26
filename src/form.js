import React from 'react';
import CommentQueries from './commentsQueries'
import Comments from './comments.js'
import SinglePost from './singlePost'
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
              <SinglePost
                likes = {e.likes}
                userName = {e.userName}
                _id = {e._id}
                content = {e.content}
              />

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
