import React from 'react'
import './PictureInfoBlock.css'

function pictureInfoBlock({url}) {
  return (
    <div className='pictureContainer' style={
        {
          backgroundImage: `url(${url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }
    }>
        <h2 className='title'>Picture</h2>
    </div>
  )
}

export default pictureInfoBlock
