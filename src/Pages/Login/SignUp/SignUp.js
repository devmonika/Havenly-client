import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
// import toast, { Toaster } from 'react-hot-toast';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginImage from '../../../assetes/login.jpg';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const { createUser, updateUserProfile, verifyEmail, signInWithGoogle, } = useContext(AuthContext);

    //extra try
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpError, setSignUpError] = useState('');
    console.log(signUpEmail);



    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathName || '/';
    const [createdUserEmail, setCretedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    if (token) {
        navigate('/')
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.files[0];
        const email = form.email.value;
        const password = form.password.value;
        const user = form.user.value;
        // console.log(name, image, email, password, user);


        //upload image into imgbb
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=5fe8f21565e313f421a85537d88c8f49`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.data.display_url);
                const users = {
                    name: name,
                    email: email,
                    image: data.data.display_url,
                    role: user
                }
                // storedata into mongodb
                fetch('https://havenly-server1.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(users)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        setCretedUserEmail(email);
                        //accessToken
                        // getuserToken(email)
                        // toast.success('user added successfully')
                    })

                //create user
                createUser(email, password)
                    .then(result => {
                        const user = result.user;
                        // console.log(user);
                        toast.success('User created successfully');

                        //update user
                        updateUserProfile(name, data.data.display_url)
                            .then(() => {

                            })
                            .catch(error => console.log(error))

                    })
                    .catch(error => {
                        console.log(error);
                        setSignUpError(error.message);
                    })


            });

    }

    // save user function into database 


    const saveUser = (name, email, photoURL, role) => {
        const users = {
            name,
            email,
            photoURL,
            role
        };
        fetch('https://havenly-server-seven.vercel.app/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                setSignUpEmail(email);
            })
            .catch(err => console.log(err));

    };


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {


                const user = result.user;
                setSignUpEmail(user?.email);
                saveUser(user?.displayName, user?.email, user?.photoURL, 'buyer');

                toast.success('Congratulation. Sign Up complete.');

                console.log(result.user.displayName, result.user.email, result.user.photoURL);



                navigate(from, { replace: true });

            })
            .catch(err => console.log(err))



    }







    return (
        <div className='grid border grid-cols-1 sm:grid-cols-2  w-full bg-[#1E293B]'>
            <div>
                <img src='https://i.postimg.cc/Ghn6D5Jh/photo-1568605114967-8130f3a36994.jpg' className="w-full h-full object-cover" alt="" />
            </div>
            <div className=' flex flex-col  p-6 rounded-md sm:p-10 bg-[#1E293B] text-white-900  mt-24'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold text-secondary'>Sign Up</h1>
                    <p className='text-sm  text-gray-400'>
                        Create a new Account
                    </p>
                </div>


                <form className='space-y-6 ng-untouched ng-pristine ng-valid'
                    onSubmit={handleSubmit}

                >

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-400 ">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-400">Select image</span>
                        </label>
                        <input type="file" name="image" placeholder="Select image" className="input input-bordered" />
                    </div>
                    <div>

                        <select name="user" id="" className='my-2 text-xl font-semibold'>
                            <option value="seller">Seller</option>
                            <option value="buyer">Buyer</option>
                        </select>


                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-400">Email</span>
                        </label>
                        <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-400">Password</span>
                        </label>
                        <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <p className="label-text-alt text-gray-400 link link-hover">Forgot password?</p>
                        </label>
                    </div>
                    <div className="form-control mt-4">
                        <input className="btn  bg-secondary text-white" type="submit" value="SignUp" />

                    </div>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>

                <div>
                    <p className='text-center mt-4 text-gray-400'>  Login with social accounts</p>
                </div>
                <div className='flex justify-center  '>
                    <div className=' mb-4'>
                        <button
                            onClick={handleGoogleSignIn}


                            aria-label='Log in with Google'
                            className='p-3 rounded-sm text-secondary'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 32 32'
                                className='w-5 h-5 fill-current'
                            >
                                <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                            </svg>
                        </button>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <p className='px-6 text-sm text-center text-gray-400'>Already have an Login Please!!  {'   '}
                        <Link to='/login' className='hover:underline text-gray-400 '>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;