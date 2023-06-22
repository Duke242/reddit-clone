import React from 'react'
import './popupPost.css'

function popupPost() {
  return (
    <div className='popupPost'>
        <form action="/submit-form" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"/>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"/>
        <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default popupPost
