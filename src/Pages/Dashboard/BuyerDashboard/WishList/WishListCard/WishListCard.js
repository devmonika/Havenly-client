import React from 'react';
import { toast } from 'react-hot-toast';

const WishListCard = ({ wish, refetch }) => {
    const { address, seller_img, country, description, img1, img2, price, seller_name } = wish;

    const intPrice = parseInt(price);
    const formattedPrice = intPrice.toLocaleString();

    console.log(formattedPrice);

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
        <article className="mt-5 flex flex-wrap md:flex-nowrap shadow-lg w-full group cursor-pointer transform duration-500 hover:-translate-y-1 hover:shadow-2xl group">
            <div className='relative overflow-hidden'>
                <img className="w-full md:w-64 md:h-full absolute" src={img2} alt="" />
                <img className="w-full md:w-64 md:h-full relative transform duration-500 group-hover:opacity-0" src={img1} alt="" />
            </div>

            <div className="">
                <div className="p-5 pb-10">
                    <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                        {address}
                    </h1>
                    <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                        {description?.slice(0, 100)}...
                    </p>
                </div>
                <div className="bg-blue-50 p-5">
                    <div className="sm:flex sm:justify-between">
                        <div>
                            <div className="text-lg text-gray-700">
                                <span className="text-gray-900 font-bold">{country}</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={seller_img} alt='sellerImage' />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-gray-600 ml-2 text-sm md:text-base mt-1 font-semibold">
                                    {seller_name}
                                </div>
                            </div>
                        </div>
                        <button onClick={() => handleDeleteWishlist(wish)} className="inline-flex items-center mt-3 px-4 py-1 bg-secondary hover:bg-primary text-white text-sm font-medium rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                        </button>
                    </div>
                    <div className="mt-3 text-secondary font-bold text-lg md:text-lg">
                        Price: ${formattedPrice}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default WishListCard;