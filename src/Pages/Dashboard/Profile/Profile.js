import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import image from '../../../images/profile.png';
import { MdEditCalendar } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
const Profile = () => {
    const { user } = useContext(AuthContext);
    const [userInfo, setuserInfo] = useState([]);
    console.log(userInfo)

    useEffect(() => {
        fetch(`https://havenly-server-new.vercel.app/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setuserInfo(data[0]))
    }, [user?.email]);
    return (
        <div>

            {/* new cosw */}
<div class="bg-gray-100 bg-opacity-25 mt-24">

  <div class="lg:w-full bg-purple-600  mb-8">

    <div class="flex flex-wrap items-center justify-evenly p-4 md:py-8">

      <div class="md:w-3/12 md:ml-16">
        
        <img class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-pink-600 p-1" src={userInfo.image} alt="profile"/>
      </div>

      
      <div class="w-8/12 md:w-7/12 ml-4">
        <div class="md:flex md:flex-wrap md:items-center mb-4">
          <h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
          {userInfo.name}
          </h2>

          
        

          
          <a href="#" class=" 
                        "><FaCheckCircle></FaCheckCircle></a>
        </div>

        
      

        
        <div class="hidden md:block">
          <h1 class="font-semibold">{userInfo.name}</h1>
          <span>Travel, Nature and Music</span>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>

      </div>

      
      <div class="md:hidden text-sm my-2">
        <h1 class="font-semibold">Mr Travlerrr...</h1>
        <span>Travel, Nature and Music</span>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>

    </div>

    
   
  </div>
</div>
{/* form  */}
<div class="flex items-center justify-center px-6 w-full">
    <div class="w-full">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        {/* <a href="#" class="flex justify-center font-bold text-4xl"> LOGO </a> */}

        <h2 class="mt-6 text-2xl font-extrabold text-center leading-9">Update Your Information</h2>

        
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form>
          <div>
            <label for="email" class="block text-sm font-medium leading-5"> Name </label>

            <div class="mt-1 rounded-md shadow-sm">
              <input id="text" name="text" type="text" required autofocus class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>

          <div class="mt-6">
            <label for="password" class="block text-sm font-medium text-gray-700 leading-5"> image </label>

            <div class="mt-1 rounded-md shadow-sm">
              <input id="text" type="file" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>
          <div class="mt-6">
            <label for="password" class="block text-sm font-medium text-gray-700 leading-5"> About </label>

            <div class="mt-1 rounded-md shadow-sm">
              <textarea id="text" type="text" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"></textarea>
            </div>
          </div>
          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-500 focus:outline-none transition duration-150 ease-in-out">Update</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Profile;