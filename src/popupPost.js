import React from 'react'
import { useState } from'react'
import './popupPost.css'
import { collection, addDoc } from "firebase/firestore"; 
import db from './db';

function PopupPost({handleCreatePost}) {

    const [text, setText] = useState('')
    const [community, setCommunity] = useState('')
    const [title, setTitle] = useState('')
    const [username, setUsername] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
  
        addDoc(collection(db, "posts"), {
          text: text,
          username: username,
          community: community,
          title: title,
        })
        setText('')
        setCommunity('')
        setTitle('')
        setUsername('')
      }
  

    
    return (
        <div className="popup-box">
            <div className="popupPost">
                <button className="close-icon" onClick={handleCreatePost}>x</button>
                <form action="/submit-form" method="POST" className='submitForm' onSubmit={handleSubmit}>
                <label>
                    Username
                    <input name="username" className='usernameInput' onChange={(e) => setUsername(e.target.value)}  value={username} placeholder="Username" />
                </label>
                <br />
                <label>
                    Title
                    <input name="title" className='titleInput' onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Title" />
                </label>
                <label>
                    Community
                    <input name="community" className='communityInput' onChange={(e) => setCommunity(e.target.value)} value={community} placeholder="Community" />
                </label>
                <label>
                    <textarea name="text" className='textInput' onChange={(e) => setText(e.target.value)} value={text} placeholder="Text" />
                </label>
                <br />
                <button type="submit" className='submitButton'>Submit</button>
                </form>
            </div>
      </div>
    );
  }


export default PopupPost
