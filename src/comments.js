import React, {useEffect, useState} from 'react'


function Comments({id, comments}) {
  if (comments.length === 0) {
    return null;
  }

  return (
    <>
    <div>
      {comments.map((e) => {
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
      let month = new Date(Number(date)).getDate();
      let day = new Date(Number(date)).getMonth()+1;
      let hour = new Date(Number(date)).getHours();
      let min = new Date(Number(date)).getMinutes();
      if (hour === 0) hour = "00"
      setDateData({
        month,
        day,
        hour,
        min,
      })
    },[])

    return (
      <>
      <div>
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
