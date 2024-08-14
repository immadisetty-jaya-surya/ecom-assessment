import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";
import { useCart } from "@/utils/CartContext"

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
        </>
      ) : (
        <p>Dude! your cart is empty</p>
      )}
    </div>
  )
}

export default Carts