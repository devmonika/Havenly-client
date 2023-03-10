import React from 'react';
import './Login.css';
const Login2 = () => {
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
      <p>Sign Up with Social account </p>
  </div>
  <button
   aria-label='Log in with Google'
               className='p-3 rounded-sm text-center center'
           >
               <svg
                   xmlns='http://www.w3.org/2000/svg'
                   viewBox='0 0 32 32'
                   className='w-5 h-5 fill-current '
               >
                   <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
               </svg>
           </button>
       <div className="signup-link">
           <p>Don't have an account? <a className='signupBtn-link' href="#">Sign Up</a> </p>
       </div>
   </form>
</div>
</div>
</div>
    );
};

export default Login2;