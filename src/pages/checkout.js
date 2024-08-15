import CheckoutForm from '@/components/CheckoutForm';
import CheckoutSummary from '@/components/CheckoutSummary';
import React, { useState } from 'react'

const Checkout = () => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleCheckout = (details) => {
    setOrderDetails(details);
    setOrderConfirmed(true);
  }

  return (
    <div className='p-6 flex flex-col md:flex-row'>
      {!orderConfirmed ? (
        <>
          <div className=' md:w-1/2'>
            <CheckoutForm onSubmit={handleCheckout}/>
          </div>
          <div className='md:w-1/2 md:ml-6'>
            <CheckoutSummary />
          </div>
        </>
      ) : (
        <div className="text-center w-full">
          <h1 className="text-2xl font-bold mb-4">Order confirmed</h1>
          <p>Thank You for your purchase, {orderDetails.name}!</p>
          <p>Your order will be shipped to:</p>
          <p>{orderDetails.address}</p>
          <p className="mt-4">Total Paid: ${orderDetails.total}</p>
        </div>
      )}
    </div>
  )
}

export default Checkout