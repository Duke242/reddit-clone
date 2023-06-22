import React from 'react'
import './PostBlock.css'

function PostBlock({
    username,
    title,
    community,
    text
}) {
  return (
    <div className='postBlock'>
      <div className='postBlock__header'>
      <h5 className='postBlock__communityTitle'>{community}</h5>
      <h5 className='postBlock__postedTitle'>{username}</h5>
      <button className='postBlock__joinButton'>Join</button>
      </div>
      <h3 className='postTitle'>{title}</h3>
      <p className='postBody'>{text}</p>
    </div>
  )
}

export default PostBlock
