import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import image from '../../../images/profile.png';
import { MdEditCalendar } from "react-icons/md";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const[userInfo, setuserInfo] = useState([]);
    console.log(userInfo)

    useEffect(()=>{
        fetch(`https://havenly-server-new.vercel.app/user?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setuserInfo(data[0]))
    },[user?.email]);
    return ( 
        <div>
            <div className='border-t-indigo-500 border-4 mt-2 border-x-0 border-b-0 py-10 bg-white shadow-2xl'>
                <div className=' flex justify-center items-center  mt-4'>
                    <img src={userInfo.image} alt="" className='h-60 rounded-full w-60 mt-24' /> <br />


                </div>
                <div className='text-center mt-2'>
                    <h5 className='my-2 text-3xl font-semibold text-primary uppercase mt-3'>{userInfo.name}</h5>
                    
                    <p className='my-2 leading-8'>responsible for building customer relationships <br/> and developing business with existing and prospective customers <span><MdEditCalendar></MdEditCalendar></span> </p>
                    <h5 className='my-2'>{userInfo.email}</h5>
                    <h5>{user?.phoneNumber}</h5>
                </div>
            </div>
            <div className='border-t-indigo-500 border-4 mt-4 border-x-0 border-b-0 py-10 bg-white shadow-2xl'>
                <h5 className='text-xl mb-2'>Profile Update</h5>
                <div>
                    <form >
                        <div className="md:col-span-2">
                            <label htmlFor="contact">Name</label>
                            <div className="h-10 flex border border-gray-200 rounded items-center mt-1">
                                <input type="number" name="name" id="contact" placeholder="Contact" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"

                                />
                            </div>
                        </div>
                        <div className="md:col-span-2 my-2">
                            <label htmlFor="contact">Email</label>
                            <div className="h-10 flex border border-gray-200 rounded items-center mt-1">
                                <input type="number" name="email" id="contact" placeholder="Contact" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"

                                />
                            </div>
                        </div>
                        <div className="md:col-span-2 my-2">
                            <label htmlFor="contact">Address</label>
                            <div className="h-10 flex border border-gray-200 rounded items-center mt-1">
                                <input type="number" name="address" id="contact" placeholder="Address" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"

                                />
                            </div>
                        </div>
                        <div className="md:col-span-5 my-2">
                            <label htmlFor="description">About Us</label>
                            <textarea className="textarea w-full pb-8 border-gray-300"
                                placeholder="About us"
                                name='about'

                            ></textarea>
                        </div>
                        {/* <div className="md:col-span-2 my-2">
                            <label htmlFor="contact">Reviews</label>
                            <div className="h-10 flex border border-gray-200 rounded items-center mt-1">
                                <input type="number" name="reviews" id="reviews" placeholder="Add Your Reviews" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"

                                />
                            </div>
                        </div> */}
                        <div className="md:col-span-2 my-2">
                            <label htmlFor="contact">Ratings</label>
                            <div className="h-10 flex border border-gray-200 rounded items-center mt-1">
                                <input type="number" name="ratings" id="ratings" placeholder="Rate our sevices" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"

                                />
                            </div>
                        </div>

                        <div className="md:col-span-2 my-2">
                            <label htmlFor="contact">Phone</label>
                            <div className="h-10 flex border border-gray-200 rounded items-center mt-1">
                                <input type="number" name="phone" id="contact" placeholder="Contact" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"

                                />
                            </div>
                        </div>
                    </form>
                    <div className='md:col-span-5 text-center mt-2'>
                        <div>
                            <input type="submit" value="submit" className='bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-6 rounded'/>
                        </div>

                    </div>
                    {/* <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-start">
                            <input className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded" type="submit" value="Add Properties" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Profile;