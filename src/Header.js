import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './Header.css'
import { AiOutlineUser } from'react-icons/ai';

function Header() {
  return (
    <div className='header'>
      <SocialIcon url="https://www.reddit.com"/>
      <h3>Reddit</h3>
      <input type='text' placeholder='Search Reddit' className='searchRedditInput'/>   
      <button className='get-app-button'>Get App</button>
      <button className='log-in-button'>Log In</button>
      <AiOutlineUser size={30} color='gray' className='userIcon'/>
    </div>
  )
}

export default Header
