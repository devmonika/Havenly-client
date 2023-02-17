import React from 'react';

const PasswordSetting = () => {
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
        <div class="">
          <div>
            <span class="uppercase text-sm text-secondary font-bold">Current Password</span>
            <input class="w-full bg-gray-300  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder=""/>
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-secondary font-bold">New Password</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"/>
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-secondary font-bold">Confirm Password</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"/>
          </div>
        
          <div class="mt-8">
            <button
              class="uppercase text-sm font-bold tracking-wide bg-secondary text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default PasswordSetting;