import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const PasswordSetting = () => {
  const { resetPassword, setLoading } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const currentPassword = form.current.value;
    const newPassword = form.newPassword.value;
    const confirmPassword = form.confirmPassword.value;
    // console.log(email, currentPassword, newPassword, confirmPassword)
  }
  //reset password functionality
  const handleResetPassword = () => {
    resetPassword(userEmail)
      .then(() => {
        toast.success('Please check your email for reset password');
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        toast.error(error.message);
        // setLoading(false);
      })
  }



  return (
    <div>
      <h1 class="mt-20 font-extrabold text-secondary text-3xl text-center">Update Your Password</h1>
      <div class=" text-gray-100 px-8 py-12">

        <div
          class="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-gray-900 rounded-lg shadow-lg">
          <div class="flex flex-col justify-between">
            <div>
              <h2 class="text-4xl lg:text-5xl font-bold text-secondary">Want To Change your password?</h2>
              {/* <div class="text-gray-700 mt-8">
              Hate forms? Send us an <span class="underline">email</span> instead.
            </div> */}
            </div>

          </div>
          <form class=""
            onSubmit={handleSubmit}
          >
            <div>
              <span class="uppercase text-sm text-secondary font-bold">Current Password</span>
              <input class="w-full bg-gray-300  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder=""
                name="current"
              />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-secondary font-bold">New Password</span>
              <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="newPassword"
              />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-secondary font-bold">Confirm Password</span>
              <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="confirmPassword"
              />
            </div>
            {/* email */}
            <div class="mt-8">
              <span class="uppercase text-sm text-secondary font-bold">Email</span>
              <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="email"
                onBlur={event => setUserEmail(event.target.value)}
              />
            </div>

            <div class="mt-8">
              {/* <input type="submit" class="uppercase text-sm font-bold tracking-wide bg-secondary text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" placeholder='  Update Password'

               /> */}
              <button
                class="uppercase text-sm font-bold tracking-wide bg-secondary text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                onClick={handleResetPassword}
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordSetting;