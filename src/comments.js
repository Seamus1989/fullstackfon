import React, {useEffect, useState} from 'react'


function Comments({id, comments}) {
  if (comments.length === 0) {
    return null;
  }

  return (
    <>
    <div>
      {comments.sort((a,b)=> b.date - a.date).map((e) => {
        return (
          <>
            <SingleComment
              userName = {e.userName}
              likes= {e.likes}
              date = {e.date}
              content = {e.content}
              />
          </>
        )
      })}
    </div>
    </>
  )
};
function SingleComment({
  content,
  userName,
  likes,
  date
  }) {
    const [dateData, setDateData] = useState({})

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
      <div className = "comment-whole">
        {content}
        <div style = {{fontSize: "85%", paddingLeft:10}}>
          <i style = {{fontSize:"94%", display:"inline"}}><br/> - {userName} </i>
          <div style = {{fontSize:"85%", display:"inline"}}>
            {dateData.day}/{dateData.month} {dateData.hour}:{dateData.min}&nbsp;</div>
          <div style = {{fontSize:"90%", display:"inline"}}>
            <i style = {{display:"inline"}} class="fa fa-thumbs-o-up"></i>
             &nbsp;{likes}
          </div>
        </div>
      </div>
      </>
    )
}
export default Comments;
