import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../Shared/Footer/Loading/Loading';
import PromoteCheckout from './PromoteCheckout';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const PromotePayment = () => {

    const data = useLoaderData();
    const navigation = useNavigation();

    const { address, category,
        city, contact, country, description, img1,
        seller_img, seller_name, seller_email,
        img2, img3, price, sqft, status, date,
        _id } = data;

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }



    let total = parseFloat(price);
    let commission =parseFloat (total * 0.02);
    // let grandTotal = (total + commission).toFixed(2)
    // // let total = grandTotal.toString();
    // console.log(grandTotal);

    return (
        <div className=' grid gap-4 grid-cols-1 md:grid-cols-2 justify-items-center content-center w-auto h-full m-auto '>
            <div className=''>
                <h2 className='text-2xl font-semibold'>Get premium service</h2>
                <p className='text-lg'>Please pay <strong>${price}</strong> For Promote your Product</p>
                <div className='w-100 my-6'>
                    <Elements stripe={stripePromise}>
                        <PromoteCheckout
                            data={data}
                            commission={commission}
                        />
                    </Elements>
                </div>
            </div>

            <div className='cart'>
                <h3 className='text-2xl'>Payment for promote</h3>
                <p>Subtotal: ${price}</p>
                <p>Comission: ${commission}</p>
            </div>
        </div>
    );
};

export default PromotePayment;