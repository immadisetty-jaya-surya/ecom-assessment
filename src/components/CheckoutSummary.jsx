import { useCart } from '@/utils/CartContext'
import React from 'react'

const CheckoutSummary = () => {
  const {cart,getSubTotal,getTotalWithDiscount, discount} = useCart(); 
  return (
    <div className='text-lg font-bold mb-4'>
      <h2 className=' space-y-4'>Order Summary</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className=' flex justify-between'>
            <span>{item.quantity} * {item.title}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className='mt-4 border-t pt-4 flex justify-between font-bold'>
        <span>Total</span>
        <span>${getSubTotal()}</span>
      </div>
      {discount > 0 && (
        <div className=' flex justify-between'>
          <span>Discount ({discount}%):</span>
          <span>- ${((getSubTotal() * discount) / 100).toFixed(2)}</span>
        </div>
      )}
      <div className="mt-4 border-t pt-4 flex justify-between font-bold">
        <span>Total</span>
        <span>${getTotalWithDiscount()}</span>
      </div>
    </div>
  )
}

export default CheckoutSummary