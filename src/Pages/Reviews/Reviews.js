import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { siteName } from '../../App';
import Loading from '../Shared/Footer/Loading/Loading';
import AddReview from './AddReview';
import ReviewCard from './ReviewCard';
import propertys from '../../images/propery-bg.jpg';

const Reviews = () => {

    const { data: reviews = [], isLoading, refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch('https://havenly-server1.vercel.app/reviews');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Reviews - {siteName}</title>
            </Helmet>
            <section className="">
                <div className="property">
                    <img src={propertys} alt="" />
                    <div className='propertyContent'>
                        <h2>Reviews</h2>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="flex justify-end">
                        <label
                            htmlFor="booking-modal"
                            className="flex p-2.5 bg-secondary rounded-xl hover:rounded-3xl hover:bg-green-700 transition-all duration-300 text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Add Reviews
                        </label>
                    </div>
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Read trusted reviews from our customers
                        </h2>
                        <p className="text-gring-offset-warm-gray-500 mx-auto mt-4 max-w-lg">
                            We value your feedback! Please take a moment to share your thoughts about our products or services. Your input helps us improve and provide the best experience for our customers. Thank you for choosing us.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-2">
                        {
                            reviews.map(review => <ReviewCard
                                key={review._id}
                                review={review}
                            ></ReviewCard>)
                        }

                    </div>
                </div>
                <AddReview
                    refetch={refetch}
                ></AddReview>
            </section>
        </HelmetProvider>
    );
};

export default Reviews;