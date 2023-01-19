import React from 'react';

const AddReview = ({ loading, user, userMatch }) => {

    const handleModalSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const ratings = form.ratings.value;
        const reviews = form.reviews.value;

        console.log(ratings, reviews);

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

                    <form
                        onSubmit={handleModalSubmit}
                        className="space-y-6 ng-untouched ng-pristine ng-valid"
                    >
                        {/* <div className="space-y-3 text-sm ">
                            <label className="block text-sm">User Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 rounded-md bg-gray-100  text-gray-900 "
                                defaultValue={user?.displayName}
                            />
                        </div> */}

                        {/* <div className="space-y-3 text-sm">
                            <label className="block text-sm">Email</label>
                            <input
                                disabled
                                defaultValue={user?.email}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
                            />
                        </div> */}
                        
                        <div className="space-y-3 text-sm">
                            <label className="block text-sm">Ratings</label>
                            <input
                                type="number"
                                name="ratings"
                                placeholder="Rate our Service Out of 5"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
                                defaultValue={userMatch?.university}
                            />
                        </div>

                        <div className="space-y-3 text-sm">
                            <label className="block text-sm">Reviews</label>
                            <textarea
                                type="text"
                                name="reviews"
                                placeholder="Give your valuable review"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
                                defaultValue={userMatch?.address}
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