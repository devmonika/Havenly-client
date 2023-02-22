import React from 'react';
import './Login.css'
const SignUp2 = () => {
    return (
        <div className="loginForm">
        <div className='wrapper'>
       <div className="form-wrapper sign-in">
           <form action="">
               <h2>Login</h2>
               <div className="input-group">
                   <input type="text" required/>
                   <label for=''>Username</label>
               </div>
               <div className="input-group">
                   <input type="password" required/>
                   <label for=''>Password</label>
               </div>
               <div className="remember">
                   <label for=''><input type="checkbox" /> Remember me</label>
               </div>
               <button type='submit'>Login</button>
               <div className="signup-link">
                   <p>Don't have an account? <a className='signupBtn-link' href="#">Sign Up</a> </p>
               </div>
           </form>
       </div>
   </div>
  </div>
    );
};

export default SignUp2;