import React from 'react'
import './popupPost.css'

function popupPost() {
    const handleSubmit = (event) => {
      event.preventDefault();

    };
  
    return (
      <div className="popupPost">
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
            <textarea name="text" className='textInput' placeholder="Text" />
          </label>
          <br />
          <button type="submit" className='submitButton' onClick={(e) => {
            e.preventDefault()
            console.log('Submit')  
          }}>Submit</button>
        </form>
      </div>
    );
  }
  

export default popupPost
