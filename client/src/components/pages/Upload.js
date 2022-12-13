// React Components
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios';





const Upload = () => {

  const [uploadField, setUploadField] = useState({
    Content: '', //submitting to the content key
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    const updatedField = {
      ...uploadField,
      [e.target.name]: e.target.value,
    }
    setUploadField(updatedField)
  }

  //submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(uploadField)
    try {
      await axios.post('/notes', uploadField)
      console.log('post created')
    } catch (err) {
      console.log(err.response.data.message)
      setError(err.response.data.message)
    }
  }

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