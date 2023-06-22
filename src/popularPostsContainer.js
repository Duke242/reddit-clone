import React from 'react'
import './popularPostsContainer.css'

function popularPostsContainer() {
  return (
    <div className='container'>
        <button className='hotButton'>Hot</button>
        <button className='everywhereButton'>Everywhere</button>
        <button className='newButton'>New</button>
        <button className='topButton'>Top</button>
    </div>
  )
}

export default popularPostsContainer
