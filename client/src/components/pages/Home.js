// React Components
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';
import { setToken } from '../helpers/auth'



const Home = () => {

  const navigate = useNavigate()

  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')


  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/auth/login/', formFields)
      setToken(data.token)
      navigate('/upload') //page to move on to
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })

  }



  return (
    <main className='main'>
      <div className='home-hero'>
        <h1 className='display-3'>notes & quotes</h1>
      </div>
      <div className='home-article'>
        <h2>welcome. log in to catch up with your community of positive notemakers</h2>
        <div className='flex-container'>
          <div className='login-form-wrapper'>
            <form className='login-form' onSubmit={handleSubmit}>
              <label htmlFor='email'>email</label>
              <input type='email' placeholder='email address' id='email' name='email' onChange={handleChange} />
              <label htmlFor='password'>password</label>
              <input type='password' placeholder='*******' id='password' name='password' onChange={handleChange} />
              <button type='submit'>Log In</button>
            </form>
            <button className='link-button'><Link to='/register'>dont have account yet? sign up here</Link></button>
          </div>
          <div className='sample-quotes'>
          </div>
        </div>
      </div>
      <footer>
        <p>if this is the bottom that means it's only up from here 🌱</p>
      </footer>
    </main>
  )
}



export default Home