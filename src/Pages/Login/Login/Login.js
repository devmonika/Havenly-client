import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginImage from '../../../assetes/login.jpg';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const { signin, setLoading, signInWithGoogle, resetPassword } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathame || '/';
    if (token) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        signin(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('User Login successfully')
                // navigate(from, { replace: true });
                setLoginUserEmail(email)
            })
            .catch(error => {
                console.log(error);
                setLoading(false)
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });

            })
            .catch(err => console.log(err))
    }

    //reset password
    const handleResetPassword = () => {
        resetPassword(userEmail)
            .then(() => {
                toast.success('Please check your email for reset password')
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='grid grid-cols-1  sm:grid-cols-2 h-screen w-full  '>
            <div>
                <img src='https://i.postimg.cc/Ghn6D5Jh/photo-1568605114967-8130f3a36994.jpg' className="w-full h-full object-cover" alt="" />
            </div>
            <div className=' flex flex-col  p-6 rounded-md sm:p-10 bg-white text-white-900 mt-24'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Login Now!</h1>
                    <p className='text-sm  text-gray-400'>
                        Login to access your account
                    </p>
                </div>


                <form
                    onSubmit={handleSubmit}
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    {/* <h1 className="text-4xl font-bold text-center my-4">Login now!</h1> */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            onBlur={event => setUserEmail(event.target.value)}
                            placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            required
                            name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            {/* <p className="label-text-alt link link-hover">Forgot password?</p> */}
                            <button
                                onClick={handleResetPassword}
                                className='text-xs hover:underline text-gray-400'
                            >
                                Forgot password?
                            </button>
                        </label>
                    </div>
                    <div className="form-control mt-4">
                        <input className="btn bg-slate-900 " type="submit" value="login" />

                    </div>
                </form>

                <div>
                    <p className='text-center mt-4'>  Login with social accounts</p>
                </div>
                <div className='flex justify-center  '>
                    <div className=' mb-4'>
                        <button

                            onClick={handleGoogleSignIn}
                            aria-label='Log in with Google' className='p-3 rounded-sm'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 32 32'
                                className='w-5 h-5 fill-current'
                            >
                                <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                            </svg>
                        </button>

                    </div>
                    
                </div>
                <div>
                    <p className='px-6 text-sm text-center text-gray-400'>Don't have an account yet? {' '}
                        <Link to='/signup' className='hover:underline text-gray-600'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;