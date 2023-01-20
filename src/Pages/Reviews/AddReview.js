import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const AddReview = ({ loading, refetch }) => {
    const { user } = useContext(AuthContext);

    const handleModalSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const ratings = form.ratings.value;
        const reviews = form.reviews.value;

        const review = {
            reviewer: user?.displayName,
            reviewerImage: user?.photoURL,
            reviewerEmail: user?.email,
            reviews,
            ratings
        };

        // save review post information in database
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review added');
                    form.reset();
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative text-black bg-white">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className='text-lg font-bold text-center m-2'>Add A Review</h3>
                    <form
                        onSubmit={handleModalSubmit}
                        className="space-y-6 ng-untouched ng-pristine ng-valid"
                    >
                        <div className="space-y-3 text-sm">
                            <label className="block text-sm">Ratings</label>
                            <input
                                type="number"
                                name="ratings"
                                placeholder="Rate our Service Out of 5"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
                            />
                        </div>

                        <div className="space-y-3 text-sm">
                            <label className="block text-sm">Reviews</label>
                            <textarea
                                type="text"
                                name="reviews"
                                placeholder="Give your valuable review"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
                            />
                        </div>
                        <div>
                            <button className='btn btn-outline btn-error' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;