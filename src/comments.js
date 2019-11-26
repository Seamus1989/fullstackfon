import React from 'react'


function Comments({id, comments}) {
  if (comments.length === 0) {
    return null;
  }

  return (
    <>
    <div>
      {comments.map((e) => {
        console.log(e)
        return (
          <>
          <p>
            {e.content}
            <i style = {{fontSize:"94%"}}><br/> - {e.userName} </i>
            <div style = {{fontSize:"90%", display:"inline"}}>
              <i class="fa fa-thumbs-o-up"></i>
               &nbsp;{e.likes}
            </div>
          </p>
          </>
        )
      })}
    </div>
    </>
  )
}

export default Comments;

/*
So the comments isnt returning from query

{comments.map((e) => {
  return (
    <>
    <p>{e.userName}: {e.content}</p>
    </>
  )
})}*/
