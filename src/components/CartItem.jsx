import { useCart } from "@/utils/CartContext"
import Image from "next/image"

const CartItem = ({item}) => {
  const {updateQuantity, removeItem} = useCart()
  return (
    <div className=" flex justify-between items-center p-4 border-b">
      <Image width={100} height={100} src={item.image} alt={item.title} className=" w-16 h-16 object-cover" />
      <div>
        <h2 className=" font-semibold text-sm lg:text-base truncate max-w-[150px]">{item.title}</h2>
      </div>
      <div className=" flex items-center">
        <button onClick={() => updateQuantity(item.id, -1)} className="bg-gray-300 px-2 py-1 rounded-lg">-</button>
        <p className=" mx-2">{item.quantity}</p>
        <button onClick={() => updateQuantity(item.id, 1)} className="bg-gray-300 px-2 py-1 rounded-lg">+</button>
      </div>
      <button onClick={() => removeItem(item.id)} className=" bg-red-300 px-2 py-1 rounded-xl">Remove</button>
    </div>
  )
}

export default CartItem