import { useCart } from "@/utils/CartContext"
import { useState } from "react";

const CartSummary = () => {
  const {getSubTotal,discount,getTotalWithDiscount,applyDiscount} = useCart();
  const [discountCode, setDiscountCode] = useState('');

  const handleApplyDiscount = () => {
    applyDiscount(discountCode)
  }
  
  return (
    <div className=" p-4">
      <h2 className="font-bold text-lg">Cart Summary</h2>
      <div className="flex justify-between">
        <span>Subtotal:</span>
        <span>${getSubTotal()}</span>
      </div>
      {/* <button className=" bg-green-500 text-white px-4 py-2 rounded mt-4 w-full">
        Checkout
      </button> */}
      {discount > 0 && (
        <div className="flex justify-between">
          <span>Discount ({discount}%):</span>
          <span>- ${((getSubTotal() * discount)/100).toFixed(2)}</span>
        </div>
      )}
      <div className=" flex justify-between font-bold">
        <span>Total:</span>
        <span>${getTotalWithDiscount()}</span>
      </div>
      <div className=" mt-4">
        <input 
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder="Discount code"
          className=" p-2 border w-full rounded"
        />
        <button onClick={handleApplyDiscount} className=" bg-green-500 text-white px-4 py-2 rounded mt-4 w-full">Apply discount</button>
      </div>
    </div>
  )
}

export default CartSummary