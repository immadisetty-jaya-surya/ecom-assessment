import { useCart } from '@/utils/CartContext'
import React, { useState } from 'react'

const CheckoutForm = ({onSubmit}) => {
  const {getSubTotal,getTotalWithDiscount} = useCart();
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [address,setAddress] = useState('')
  const [paymentMethod,setPaymentMethod] = useState('credit-card');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && address) {
      onSubmit({name,email,address,paymentMethod,total: getTotalWithDiscount(),})
    }else{
      alert('Please fill all inboxes');
    }
  }
  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label htmlFor="name" className=' block text-sm font-medium text-gray-700'>name</label>
        <input 
          type="text"
          className="mt-1 p-2 border w-full rounded"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className=' block text-sm font-medium text-gray-700'>email</label>
        <input 
          type="email"
          className="mt-1 p-2 border w-full rounded"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="address" className=' block text-sm font-medium text-gray-700'>Address</label>
        <textarea
          className="mt-1 p-2 border w-full rounded"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="payment" className=' block text-sm font-medium text-gray-700'>Payment Method</label>
        <select 
          className="mt-1 p-2 border w-full rounded"
          id="payment"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="credit-card">Credit Card</option>
          <option value="phone-pay">Phone Pay</option>
          <option value="g-pay">G Pay</option>
          <option value="pay-tm">PayTM</option>
        </select>
      </div>
      <div className=' mt-6'>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
          Pay ${getTotalWithDiscount()}
        </button>
      </div>
    </form>
  )
}

export default CheckoutForm