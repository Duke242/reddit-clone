import React from 'react'
import './Feed.css'
import PictureInfoBlock from './PictureInfoBlock'
import PopularPostsContainer from './popularPostsContainer'

function Feed() {
    
  return (
    <div className='feed'>
      <h3 className='trendingTodayHeader'>Trending today</h3>
      <div className='pictureBlock'>
        <PictureInfoBlock url='https://source.unsplash.com/user/c_v_r/1900x800

        '/>
        <PictureInfoBlock url='https://source.unsplash.com/user/c_v_r/1900x800

        '/>
        <PictureInfoBlock url='https://source.unsplash.com/user/c_v_r/1900x800

        '/>
        <PictureInfoBlock url='https://source.unsplash.com/user/c_v_r/1900x800

        '/>
      </div>
      <h3 className='popularPostsHeader'>Popular today</h3>
      <PopularPostsContainer />
      
    </div>
  )
}

export default Feed

