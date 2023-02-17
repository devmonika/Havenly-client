import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import BuyerReviewCard from "../BuyerReviewCard/BuyerReviewCard";
import ReviewUpdateModal from "../ReviewUpdateModal/ReviewUpdateModal";

const BuyerReviews = () => {
  const [items, setItems] = useState([]);
  const [singleReview, setSingleReview] = useState({});

  const [reload, setReload] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://havenly-server-seven.vercel.app/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user?.email, reload]);

  const handleReviewEdit = (id) => {
    console.log(id);
    const findItem = items.find((itemsId) => itemsId._id === id);
    console.log(findItem);
    setSingleReview(findItem);
  };
  return (
    <div>
      <h1 className="mt-20 font-extrabold text-secondary text-3xl text-center">All Reviews</h1>
    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-2 p-5">
      {items.map((reviewItems) => (
        <div>
          <BuyerReviewCard
            key={reviewItems._id}
            reviewItems={reviewItems}
            reload={reload}
            setReload={setReload}
            handleReviewEdit={handleReviewEdit}
          ></BuyerReviewCard>
        </div>
      ))}
      <ReviewUpdateModal
        singleReview={singleReview}
        reload={reload}
        setReload={setReload}
      ></ReviewUpdateModal>
    </div>
    </div>
  );
};

export default BuyerReviews;
