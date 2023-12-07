import React from 'react'
import '../Stylesheets/Login.css'

function Login() {
  return (
    <div className='container'>
      <div className='login-a'>
        <div className='login-a1'>
          <img src='../Img/logo-search-removebg.png' />
          <h1>Sign In</h1>
        </div>
        <div className='login-a2'>
          <p>Don't have an account?  <a href=''>Sign Up</a></p>
          <form>
            <label>
              Email  <br />
              <input type="email"  className="inputStyle" placeholder='Email' />
            </label>
            <br />
            <label>
              Password  <br />
              <input type="password" className='inputStyle' placeholder='Password' />
            </label>
            <br />  <br />
            <button type="submit" className='btn'>Log In</button>
          </form>
        </div>
        <br/>
        <label className='abc'>
        <input
          type="checkbox"
        />
        <p>Remember Me</p>
      </label>
      <a href='' className='ab'>Forgot Password?</a>
      <p  className='ab'>2023 Ć  <a href=''> Privacy</a> and <a href=''>Terms</a></p>
      </div>
      <div className='login-b'>
      </div>
    </div>
  )
}

export default Login