import React, { useState } from 'react';
import './Feed.css';
import PictureInfoBlock from './PictureInfoBlock';
import PopularPostsContainer from './popularPostsContainer';
import PostBlock from './PostBlock';
import PopupPost from './popupPost';

function Feed() {
  const [showPopup, setShowPopup] = useState(false);

  const handleCreatePost = () => {
    setShowPopup(true);
  };

  return (
    <div className='feed'>
      <div className='trendingHeader'>
        <h3 className='trendingTodayHeader'>Trending today</h3>
        <button className='createPostButton' onClick={handleCreatePost}>
          Create Post
        </button>
      </div>
      <div className='pictureBlock'>
        <PictureInfoBlock url='https://source.unsplash.com/user/c_v_r/1900x800' />
        <PictureInfoBlock url='https://source.unsplash.com/user/c_v_r/1900x800' />
        <PictureInfoBlock url='https://source.unsplash.com/user/c_v_r/1900x800' />
        <PictureInfoBlock url='https://source.unsplash.com/user/c_v_r/1900x800' />
      </div>
      <h3 className='popularPostsHeader'>Popular posts</h3>
      <PopularPostsContainer />
      <PostBlock />
      {showPopup && <PopupPost />}
    </div>
  );
}

export default Feed;
