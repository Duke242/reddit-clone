import React from 'react'
import './PostBlock.css'

function PostBlock() {
  return (
    <div className='postBlock'>
      <div className='postBlock__header'>
      <h5 className='postBlock__communityTitle'>Post Community</h5>
      <h5 className='postBlock__postedTitle'>Posted by u/SeniorHumor</h5>
      <button className='postBlock__joinButton'>Join</button>
      </div>
      <h3 className='postTitle'>Post Title</h3>
      <p className='postBody'>Post Body mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
    </div>
  )
}

export default PostBlock
