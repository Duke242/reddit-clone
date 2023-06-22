import React, { useState } from 'react';
import './Feed.css';
import PictureInfoBlock from './PictureInfoBlock';
import PopularPostsContainer from './popularPostsContainer';
import PostBlock from './PostBlock';
import PopupPost from './PopupPost';

function Feed() {
  const [showPopup, setShowPopup] = useState(false);

  const toggleCreatePost = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className='feed'>
      <div className='trendingHeader'>
        <h3 className='trendingTodayHeader'>Trending today</h3>
        <button className='createPostButton' onClick={toggleCreatePost}>
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
      {showPopup && <PopupPost handleCreatePost={toggleCreatePost} />}
    </div>
  );
}

export default Feed;
