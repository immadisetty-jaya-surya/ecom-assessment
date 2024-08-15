import { useCart } from '@/utils/CartContext'
import Link from 'next/link';
import {FiShoppingCart} from 'react-icons/fi'

const Navbar = () => {
  const {getTotalItems,getSubTotal} = useCart();
  return (
    <nav className=' bg-gray-800 px-14 py-4'>
      <div className=' container mx-auto flex justify-between items-center'>
        <Link href='/' className='text-white text-2xl font-bold'>E-commerce</Link>
        <Link href='/carts' className='flex items-center text-white text-2xl font-bold'>
          <FiShoppingCart className='mr-2' />
          Cart ({getTotalItems()}){/* -{getSubTotal()} */}
        </Link>
        <Link href='/checkout' className='text-white text-xl font-semibold ml-6 bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition'>
          Checkout
        </Link>
      </div>
    </nav>
  );
}

export default Navbar