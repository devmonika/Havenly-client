import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import BuyerReviewCard from '../BuyerReviewCard/BuyerReviewCard';
import ReviewUpdateModal from '../ReviewUpdateModal/ReviewUpdateModal';




const BuyerReviews = () => {
  const [items,setItems] = useState([])
    const [reload,setReload] = useState(0)
    // const [updateReview,setUpdateReview] = useState('')
    // const [updateReviewLoading,setUpdateReviewLoading] = useState(false)
    const {user} = useContext(AuthContext)
   
    useEffect(()=>{
        fetch(`https://havenly-server-seven.vercel.app/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setItems(data))
    },[user?.email,reload])

    

    return (
        <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-2 p-5'>
            {
                items.map((reviewItems) =>
                 <div>
                     <BuyerReviewCard  key={reviewItems._id}  reviewItems={reviewItems} reload={reload} setReload={setReload}></BuyerReviewCard>
                     <ReviewUpdateModal reviewItems={reviewItems} reload={reload} setReload={setReload}></ReviewUpdateModal>
                 </div>
                )
            }
        </div>
    );
};

export default BuyerReviews;