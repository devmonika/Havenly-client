import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise)

const Payment = () => {
    const data = useLoaderData();
    const { address, bathrooms, bedrooms, category,
        city, contact, country, description, img1,
        seller_img, seller_name, seller_email,
        img2, img3, price, sqft, status, year, zip, date,
        _id } = data;


     
   
    let total = price;
    let comission = parseFloat((price * 0.05).toFixed(2));
    let tax = parseFloat((price * 0.05).toFixed(2));
    let grandTotal = parseFloat(total + tax + comission.toFixed(2))

    return (
        <div className=' grid gap-4 grid-cols-1 md:grid-cols-2 justify-items-center content-center w-auto h-full m-auto border-2 mb-10 mt-24'>
            <div className=''>
                <h2 className='text-2xl'>Payment For: {data.status}</h2>
                <p className='text-lg'>Please pay <strong>${price}</strong> for your apartment</p>
                <div className='w-100 my-6'>
                    <Elements stripe={stripePromise}>
                        <Checkout
                        data={data}
                        grandTotal={grandTotal}
                        />
                    </Elements>
                </div>
            </div>

            <div className='cart'>
                <h3 className='text-2xl'>order summary</h3>
                <p>Original Price: ${price}</p>
                <p>Comission: ${comission}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: ${grandTotal}</h4>
            </div>
        </div>
    );
};

export default Payment;