import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LIKE_POST } from './queries/queries';


function SinglePost({
    content,
    likes,
    userName,
    _id
  }) {
    const [likePost] = useMutation(LIKE_POST)

    const submitLike = (e) => {
      e.preventDefault();
      likePost({
        variables: {postId : _id},
        refetchQueries: ["GetAllPosts"]
      })
    }

  return (
    <>
    <p
      className = "actual-post"
      key = {_id}>
      {content}<i style = {{fontSize:"94%"}}><br/> - {userName} </i>
      <div style = {{fontSize:"90%", display:"inline"}}>
        <i
          class="fa fa-thumbs-o-up"
          onClick = {submitLike}></i>
         &nbsp;{likes}
      </div>
    </p>
    </>
  )
}
export default SinglePost;
