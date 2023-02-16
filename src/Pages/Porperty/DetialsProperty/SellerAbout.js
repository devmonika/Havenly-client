import React from 'react';

const SellerAbout = () => {
    return (
        <div class=" mx-auto my-28">
        <div class="flex justify-center align-center mb-12 bg-primary py-12">
          <img
            class="w-48 h-48 rounded-full mr-12"
            src="https://via.placeholder.com/300x300"
            alt="Profile Picture"
          />
          <div class="text-gray-700 w-60">
            <h2 class="text-xl font-bold">John Doe</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              suscipit, nisi auctor gravida finibus, risus erat laoreet nisl,
              vitae semper libero libero eget lacus.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mx-24'>
            <div className=''>
            <article class="p-6 mb-6 border border-gray-100 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
        <a href="#1" class="absolute opacity-0 top-0 right-0 left-0 bottom-0"></a>
          <div class="relative mb-4 rounded-2xl">
          <img class="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1621967314091-f7151d92bf49?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
          <a class="flex justify-center items-center bg-purple-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
            Read article <svg class="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
            </a>
          </div>
         
          
          <h3 class="font-medium text-xl leading-8">
            <a href=''>We are Professional</a>
            <a href="#2" class="block relative group-hover:text-purple-500 transition-colors duration-200">
              Lorem ipsum dolor sit amet, Sed ad minus quam voluptate?
            </a>
          </h3>
      </article>
            </div>
            <div>
            <article class="p-6 mb-6 border border-gray-100 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
        <a href="#1" class="absolute opacity-0 top-0 right-0 left-0 bottom-0"></a>
          <div class="relative mb-4 rounded-2xl">
          <img class="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1621967314091-f7151d92bf49?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
          <a class="flex justify-center items-center bg-purple-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
            Read article <svg class="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
            </a>
          </div>
         
          
          <h3 class="font-medium text-xl leading-8">
            <a href=''>We are Professional</a>
            <a href="#2" class="block relative group-hover:text-purple-500 transition-colors duration-200">
              Lorem ipsum dolor sit amet, Sed ad minus quam voluptate?
            </a>
          </h3>
      </article>
            </div>
            <div>
            <div class="mb-10">
          <h2 class="text-xl font-bold">Leave a Comment</h2>
          <textarea
            class="bg-white p-4 rounded-lg shadow-lg w-full"
            rows="4"
          ></textarea>
          <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">
            Submit
          </button>
        </div>
        <div>
          <h2 class="text-xl font-bold">Recent Comments</h2>
          <div class="bg-white p-8 rounded-lg shadow-lg mb-6">
            <p class="text-gray-700 font-bold">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </p>
            <p class="text-gray-500">- John Doe</p>
          </div>
        </div>
            </div>
        </div>
          
  </div>
  
  
    );
};

export default SellerAbout;