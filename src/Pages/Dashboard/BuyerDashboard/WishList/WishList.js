import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const WishList = () => {
    const { user } = useContext(AuthContext);

    const url = `https://havenly-server-new.vercel.app/wishlist?email=${user?.email}`;

    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteWishlist = wish => {
        fetch(`https://havenly-server-new.vercel.app/wishlist/${wish._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Property Removed')
                }
            })
    };

    return (
        <div className='mt-28'>
            <div>
                <h3 className='text-3xl my-8 text-center'>My Wishlist: {wishlist.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Address</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlist &&
                                wishlist?.map((wish, i) => <tr
                                    key={wish._id}
                                    className='hover'>
                                    <th>{i + 1}</th>
                                    <td>{wish?.address}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-28 mask mask-squircle">
                                                <img src={wish?.img1} alt='property' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>${wish?.price}</td>
                                    <td>
                                        <button onClick={() => handleDeleteWishlist(wish)} className='btn btn-xs btn-secondary'>Delete</button>
                                    </td>
                                </tr>)
                            };
                        </tbody>
                    </table>
                </div>
            </div>
            <section class="container mx-auto p-10 md:p-20 antialiased ">
                <article class=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
                    <img class="w-full md:w-52" src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg" alt="" />
                        <div class="">
                            <div class="p-5 pb-10">
                                <h1 class="text-2xl font-semibold text-gray-800 mt-4">
                                    The Magnificent Bogra
                                </h1>
                                <p class="text-xl text-gray-400 mt-2 leading-relaxed">
                                    Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh
                                </p>
                            </div>
                            <div class="bg-blue-50 p-5">
                                <div class="sm:flex sm:justify-between">
                                    <div>
                                        <div class="text-lg text-gray-700">
                                            <span class="text-gray-900 font-bold">196 km</span> from Dhaka
                                        </div>
                                        <div class="flex items-center">
                                            <div class="flex">
                                                <svg class="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                                </svg>
                                                <svg class="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                                </svg>
                                                <svg class="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                                </svg>
                                                <svg class="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                                </svg>
                                                <svg class="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                                </svg>
                                            </div>
                                            <div class="text-gray-600 ml-2 text-sm md:text-base mt-1">
                                                16 reviews
                                            </div>
                                        </div>
                                    </div>
                                    <button class="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                                        Book Ticket
                                    </button>
                                </div>
                                <div class="mt-3 text-gray-600 text-sm md:text-sm">
                                    *Places to visit: Mahasthangarh, Vasu Bihar &amp; Momo Inn
                                </div>
                            </div>
                        </div>
                </article>
                <p class="text-xs text-center text-gray-400 mt-5">
                    Original: https://codepen.io/steveschoger/pen/XwzRRZ
                </p>
            </section>
        </div>
    );
};

export default WishList;