import { useCart } from '@/utils/CartContext'
import Link from 'next/link';
import {FiShoppingCart} from 'react-icons/fi'

const Navbar = () => {
  const {getTotalItems,getSubTotal} = useCart();
  return (
    <nav className=' bg-gray-800 p-4'>
      <div className=' container mx-auto flex justify-between items-center'>
        <Link href='/' className='text-white text-2xl font-bold'>E-commerce</Link>
        <Link href='/carts' className='text-white text-2xl font-bold'>
          <FiShoppingCart className='mr-2' />
          Cart ({getTotalItems()}){/* -{getSubTotal()} */}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar