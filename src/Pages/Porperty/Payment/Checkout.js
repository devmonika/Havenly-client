import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { ErrorIcon } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Checkout = ({ data, grandTotal }) => {
    const { user } = useContext(AuthContext)
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    // const data = useLoaderData()
    const { category, seller_email, price, _id, city } = data;
    console.log(grandTotal)



    try {
        useEffect(() => {
            // Create PaymentIntent as soon as the page loads
            fetch("http://localhost:5000/create-payment-intent", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ price })
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }, [price]);
    } catch (error) {

    }



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: category,
                        email: user?.email

                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        console.log('paymentintent', paymentIntent)
        if (paymentIntent.status === 'succeeded') {

            // store payment info in the database
            const payment = {
                // price,
                grandTotal,
                transactionId: paymentIntent.id,
                buyer_email: user?.email,
                seller_email:seller_email,
                booking_id: _id,
                category: category,
                city: city,
                date: new Date()


            }
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {

                    if (data.insertedId) {
                        console.log('data', data)
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id)
                    }
                });
        }

        setProcessing(false)


    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm mt-4 btn-primary'
                    type="submit" disabled={!stripe || !clientSecret || processing}>
                    Place Order
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p> Your TransactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default Checkout;