import React from 'react'

const LoginSignup = () => {
  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <input type="text" placeholder='Your name' />
          <input type="text" placeholder='Your email' />
          <input type="text" placeholder='Your password' />
        </div>
        <button>Submit</button>
        <p className="login-signup-login">
          Already have an account? <a href="#">Login</a>
        </p>
        <div className="login-signup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continue, Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
