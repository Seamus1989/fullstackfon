import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LIKE_POST } from './queries/queries';


function SinglePost({
    content,
    likes,
    userName,
    _id,
    date,
  }) {
    const [likePost] = useMutation(LIKE_POST)

    const [dateData, setDateData] = useState({})

    const submitLike = (e) => {
      e.preventDefault();
      likePost({
        variables: {postId : _id},
        refetchQueries: ["GetAllPosts"]
      })
    }

    useEffect(() => {
      let month = new Date(Number(date)).getDate().toString().padStart(2, "0");
      let day = (new Date(Number(date)).getMonth()+1).toString().padStart(2, "0");
      let hour = new Date(Number(date)).getHours().toString().padStart(2, "0");
      let min = new Date(Number(date)).getMinutes().toString().padStart(2, "0");
      setDateData({
        month,
        day,
        hour,
        min,
      })
    },[])
    return (
      <>
      <div
        className = "actual-post"
        key = {_id}>
        {content}<i style = {{fontSize:"94%"}}><br/> - {userName} </i>
        <div style = {{fontSize:"90%", display:"inline", leftPadding:10}}>
          <i
            className="fa fa-thumbs-o-up"
            onClick = {submitLike}></i>
           &nbsp;{likes}

        </div>
        <div style = {{fontSize:"85%"}}>{dateData.day}/{dateData.month} {dateData.hour}:{dateData.min}</div>
      </div>
      </>
    )
}
export default SinglePost;
