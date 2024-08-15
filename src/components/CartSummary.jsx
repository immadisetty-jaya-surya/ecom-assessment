import { useCart } from "@/utils/CartContext"

const CartSummary = () => {
  const {getSubTotal} = useCart();
  
  return (
    <div className=" p-4">
      <h2>Cart Summary</h2>
      <div>
        <span>Subtotal:</span>
        <span>${getSubTotal()}</span>
      </div>
      {/* <button className=" bg-green-500 text-white px-4 py-2 rounded mt-4 w-full">
        Checkout
      </button> */}
    </div>
  )
}

export default CartSummary