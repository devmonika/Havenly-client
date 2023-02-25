import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../contexts/AuthProvider';

const SellerAbout = () => {
    const { user } = useContext(AuthContext);
    const [userInfo, setuserInfo] = useState([]);
   const[sellerReviews, getSellerReview] = useState([])
    const [loading, setloading] = useState(false);
    const [refetch, setrefetch] = useState(0);

    useEffect(() => {
      fetch(`https://havenly-s.vercel.app/user?email=${user?.email}`)
          .then(res => res.json())
          .then(data => {
            setuserInfo(data[0])
            // console.log("me")
          })
  }, [user?.email, refetch]);

    useEffect(() => {
      fetch(`http://localhost:5000/seller-reviews`)
          .then(res => res.json())
          .then(data => {
            getSellerReview(data)
            // console.log("me")
          })
  }, []);

  // const { data: reviews = [], isLoading } = useQuery({
  //   queryKey: ['reviews'],
  //   queryFn: async () => {
  //       const res = await fetch('');
  //       const data = await res.json();
  //       return data;
  //   }
    
// });
// console.log(reviews)
  const handleSellerReview = e =>{
  e.preventDefault();
  setloading(true)
  const form = e.target;
  const sellerReview = form.sellerReview.value;
  const addSellerReview = {
    sellerReview,
    createdAt: new Date (),

}
 



  fetch('http://localhost:5000/seller-reviews',{
    method: 'POST',
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(addSellerReview)
})
.then(res => res.json())
.then(data=>{
    console.log(data)
    if(data.acknowledged){
      alert("Review Added Successfully!", {
        // position: toast.POSITION.TOP_CENTER
      });
        // alert('Review Added Successfully!');
        form.reset();
    }
})
.catch(err=>console.error(err));
}
    return (
        <div class=" mx-auto mb-28">
        <div class="flex justify-center items-center mb-12 bg-primary py-12 pt-24">
          <img
            class="w-48 h-48 rounded-full mr-12"
            src={userInfo?.image}
            alt="Profile Picture"
          />
          <div class="text-gray-700 w-60">
            <h2 class="text-xl font-bold">{userInfo?.name}</h2>
            <p>
            {userInfo?.about}
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

           {
            user && user?.role !== "seller" ?
            <div>
            <div class="mb-10">
          <h2 class="text-xl font-bold">Leave a Comment</h2>
          <form onSubmit={handleSellerReview}>
          <textarea
            class="bg-white p-4 rounded-lg shadow-lg w-full" name='sellerReview'
            rows="4"
          ></textarea>
          <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">
            Submit
          </button>
          </form>
        </div>
        <div>
          <h2 class="text-xl font-bold">Recent Comments</h2>
          
            
              {
               sellerReviews?.map(review =>
                <div class="bg-white p-8 rounded-lg shadow-lg mb-6">
                <p class="text-gray-700 font-bold">{review.sellerReview}</p>
                <p class="text-gray-500">-{userInfo?.name}</p>
                <span>{review.createdAt}</span>
                </div>)
              }
            
            {/*  */}
          
        </div>
            </div>
            :
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

           }
        </div>
          
  </div>
  
  
    );
};

export default SellerAbout;