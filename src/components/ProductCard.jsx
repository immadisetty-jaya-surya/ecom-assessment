import { useCart } from '@/utils/CartContext'
import Image from 'next/image'
import React, { useState } from 'react'
import {FaCheckCircle} from 'react-icons/fa'

const ProductCard = ({product}) => {
  const {addToCart} = useCart();
  const [added,setAdded] = useState(false);

  const handleAddedToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false),1500);
  }
  
  return (
    <div className='border rounded-lg p-4 flex flex-col items-center h-full'>
      <Image width={500} height={500} src={product.image} alt={product.title} className=' w-full h-48 object-cover mb-4' />
      <h2 className=' text-base font-semibold'>{product.title}</h2>
      <p className=' text-gray-500'>${product.price.toFixed(2)}</p>

      <div className='mt-auto w-full flex justify-center'>
        {added ? (
          <div className=' flex items-center mt-4 text-green-500'>
            <FaCheckCircle className=' mr-2' />
            <span>Added to cart</span>
          </div>
        ) : (
          <button onClick={/* () => addToCart(product) */handleAddedToCart} className=' bg-blue-500 text-white mt-4 py-2 px-4 rounded hover:bg-blue-600 transition'>Add to cart</button>
        )}
      </div>
    </div>
  )
}

export default ProductCard