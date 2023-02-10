import React from 'react';
import { toast } from 'react-hot-toast';

const ReviewUpdateModal = ({reviewItems,reload,setReload}) => {
    const {_id,ratings,reviews} = reviewItems
    const handleModalSubmit = (e) =>{
        e.preventDefault()
        const form = e.target
        const ratings = form.ratings.value
        const reviews = form.reviews.value

        const UpdatedReview = {
          ratings,reviews
        } 

        fetch(`http://localhost:5000/reviews/${_id}`,{
          method:"PATCH",
          headers:{
            'content-type':"application/json"
          },
          body:JSON.stringify(UpdatedReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Review Updated Successfully');
                form.reset();
                setReload(reload + 1)
            }
        })
    }
    return (
        <>
      <input
        type="checkbox"
        id="review-update-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="review-update-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center m-2">
            Update your review
          </h3>
          <form onSubmit={handleModalSubmit}  className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-3 text-sm">
              <label className="block text-sm">Ratings</label>
              <input
                type="number"
                name="ratings"
                defaultValue={ratings}
                placeholder="Rate our Service Out of 5"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>

            <div className="space-y-3 text-sm">
              <label className="block text-sm">Reviews</label>
              <textarea
                type="text"
                name="reviews"
                defaultValue={reviews}
                placeholder="Give your valuable review"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>
            <div className="modal-action">
              <button
                htmlFor="review-update-modal"
                type="submit"
                className="btn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    );
};

export default ReviewUpdateModal;