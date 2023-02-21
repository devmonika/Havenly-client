import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Footer/Loading/Loading';
import Checkout from './Checkout';
import propertys from "../../../images/propery-bg.jpg";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise)

const Payment = () => {
    const data = useLoaderData();
    const navigation = useNavigation();
    const { address, bathrooms, bedrooms, category,
        city, contact, country, description, img1,
        seller_img, seller_name, seller_email,
        img2, img3, price, sqft, status, year, zip, date,
        _id } = data;

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }



    let total = parseInt(price);
    let commission = parseInt(price * 0.05);
    let tax = parseInt(price * 0.08);
    let grandTotal = (total + tax + commission).toFixed(2)
    // // let total = grandTotal.toString();
    console.log(grandTotal);

    return (
        <div>
            <div className="property">
          <img src={propertys} alt="" />
          <div className="propertyContent">
            <h2>Payment For Apartment</h2>
          </div>
        </div>
        <div className=' grid gap-4 grid-cols-1 md:grid-cols-2 justify-items-center content-center w-auto h-full border-2 p-5 mb-10'>
            <div className='mt-10'>
                <h2 className='text-2xl'>Payment For Apartment</h2>
                <p className='text-lg'>Please pay <strong>${grandTotal}</strong> for your apartment</p>
                <div className='w-100 my-6'>
                    <Elements stripe={stripePromise}>
                        <Checkout
                            data={data}
                            grandTotal={grandTotal}
                        />
                    </Elements>
                </div>
            </div>

            {/* product card start here  */}
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={img1} alt="Shoes" className='w-full rounded' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {category}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <div className='flex justify-between'>
                        <div>
                            <p>Total</p>
                            <p>Commission 5%</p>
                            <p>Tax 8%</p>       
                        </div>
                        <div>
                            <p>${total}</p>
                            <p>${commission}</p>
                            <p>${tax}</p>
                        </div>
                    </div>
                    <hr />
            
                    <div className="card-actions flex justify-between">
                    <p>GrandTotal</p>
                    <p className='text-right'>${grandTotal}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Payment;