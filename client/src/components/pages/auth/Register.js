import { Link } from 'react-router-dom'
import React, { useState } from 'react';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <main className='main'>
      <div className='home-hero'>
        <h1 className='display-3'>notes & quotes</h1>
      </div>
      <div className='home-article'>
        <h2>welcome. what would you like to share?</h2>
        <div className='register-flex-container'>
          <div className='login-form-wrapper'>
            <form className='login-form' onSubmit={handleSubmit}>
              <label>what is your name?</label>
              <input value={name} />
              <label for='email'>email</label>
              <input type='email' placeholder='email address' id='email' name='email' />
              <label for='password'>password</label>
              <input type='password' placeholder='*******' id='password' name='password' />
              <button type='submit'>register</button>
            </form>
            <button className='link-button'><Link to='/'>already have an account? login here</Link></button>
          </div>
          <div className='display-register-page'>
            <p>test</p>
          </div>
        </div>
      </div>
      <footer>
        <p>if this is the bottom that means it's only up from here 🌱</p>
      </footer>
    </main>
  )
}

