// React Components
import { Link } from 'react-router-dom'
import React, { useState } from 'react';


const Upload = () => {

  return (
    <main className='main'>
    <div className='home-hero'>
      <h1 className='display-3'>notes & quotes</h1>
    </div>
    <div className='home-article'>
      <h2>welcome</h2>
      <div className='sample-quotes'>
      </div>
      <textarea
          placeholder="what are you grateful for today?"
          className="textarea"
        />
           <div>
          <button className="create-note-button">
          share note
          </button>
        </div>
    </div>
  </main>
  )
}


export default Upload