import React from 'react'
import { useState } from'react'
import './popupPost.css'

function PopupPost({handleCreatePost}) {

    const [text, setText] = useState('')
    const [username, setUsername] = useState('')
    
    const handleSubmit = (event) => {
      event.preventDefault();

    };
  
    return (
        <div className="popup-box">
            <div className="popupPost">
                <button className="close-icon" onClick={handleCreatePost}>x</button>
                <form action="/submit-form" method="POST" className='submitForm' onSubmit={handleSubmit}>
                <label>
                    Username
                    <input name="username" className='usernameInput' placeholder="Username" />
                </label>
                <br />
                <label>
                    Title
                    <input name="title" className='titleInput' placeholder="Title" />
                </label>
                <label>
                    Community
                    <input name="community" className='communityInput' placeholder="Community" />
                </label>
                <label>
                    <textarea name="text" className='textInput' placeholder="Text" />
                </label>
                <br />
                <button type="submit" className='submitButton'>Submit</button>
                </form>
            </div>
      </div>
    );
  }


export default PopupPost
