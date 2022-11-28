import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK); 
const Payment = () => {
    
    const orderedProduct = useLoaderData();
    // console.log(orderedProduct);
    return (
        <div>
            <h1 className='text-5xl font-bold'>Payment for {orderedProduct.product_name}</h1>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        orderedProduct={orderedProduct}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;