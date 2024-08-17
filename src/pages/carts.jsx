import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";
import { useCart } from "@/utils/CartContext"
import Link from "next/link";

const Carts = () => {
  const {cart} = useCart();
  {console.log(cart)}
  return (
    <div className=" p-6">
      {cart.length > 0 ? (
        <>
          <div className=" mb-4">
            {cart.map(item => (
              <CartItem key={item.id} item={item}/>
            ))}
          </div>
          <CartSummary />
          <Link href='/checkout' className="bg-blue-500 text-white px-4 py-2 rounded mt-4 block text-center">Proceed to checkout</Link>
        </>
      ) : (
        <p>Dude! Your Cart is empty</p>
      )}
    </div>
  )
}

export default Carts