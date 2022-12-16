import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';
import { setToken } from '../../helpers/auth';

export const Register = () => {


 const navigate = useNavigate()

  const [error, setError] = useState('')
  const [formFields, setFormFields] = useState({
    email: '',
    first_name: '',
    username: '',
    location: '',
    password: '',
    password_confirmation: ''
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/auth/register/', formFields)
      setToken(data.token)
      navigate('/gallery') //page to move on to
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
        <h2>welcome. sign up to join a community of positive notemakers 	🌱</h2>
        <div className='register-flex-container'>
          <div className='login-form-wrapper'>
            <form className='login-form' onSubmit={handleSubmit}>
              <label htmlFor='first_name'>what is your first name?</label>
              <input htmlFor='first_name' placeholder='first_name' id='first_name' name='first_name' onChange={handleChange} value={formFields.first_name}></input>
              <label htmlFor='username'>what is your username?</label>
              <input htmlFor='username' placeholder='username' id='username' name='username' onChange={handleChange} value={formFields.username}></input>
              <label htmlFor='email'>email</label>
              <input type='email' placeholder='email address' id='email' name='email' onChange={handleChange} value={formFields.email} />
              <label htmlFor='password'>password</label>
              <input type='password' placeholder='*******' id='password' name='password' onChange={handleChange} value={formFields.password} />
              <label htmlFor='password_confirmation'>confirm password</label>
              <input htmlFor='password_confirmation' placeholder='*******' type='password' id='password_confirmation' name='password_confirmation' value={formFields.password_confirmation} onChange={handleChange} />
              <label htmlFor='location'>location</label>
              <input type='location' placeholder='location' id='location' name='location' onChange={handleChange}/>
              <button type='submit'>register</button>
            </form>
            <button className='link-button'><Link to='/'>already have an account? login here</Link></button>
          </div>
        </div>
      </div>
      <footer>
        <p>if this is the bottom that means it's only up from here 🌱</p>
      </footer>
    </main>
  )
}

