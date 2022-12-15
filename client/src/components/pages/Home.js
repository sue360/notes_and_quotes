// React Components
import { Link } from 'react-router-dom'
import React, { useState } from 'react';


const Home = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

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
        <h2>welcome.</h2>
      <div className='flex-container'>
        <div className='login-form-wrapper'>
          <form className='login-form' onSubmit={handleSubmit}>
            <label for='email'>email</label>
            <input type='email' placeholder='email address' id='email' name='email' />
            <label for='password'>password</label>
            <input type='password' placeholder='*******' id='password' name='password' />
            <button type='submit'>Log In</button>
          </form>
          <button className='link-button'><Link to='/register'>don't have account yet? sign up here</Link></button>
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