import { useCart } from '@/utils/CartContext'
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import {FiShoppingCart} from 'react-icons/fi'

const Navbar = () => {
  const {getTotalItems,getSubTotal} = useCart();
  const {user} = useUser();
  console.log(user);
  

  return (
    <nav className=' bg-gray-800 px-14 py-4'>
      <div className=' container mx-auto flex justify-between items-center'>
        <Link href='/' className='text-white text-3xl font-bold'>E-commerce</Link>
        <div className='flex items-center gap-4'>
          <Link href='/carts' className='flex items-center text-white text-lg font-bold'>
            <FiShoppingCart className='mr-2' />
            Carts ({getTotalItems()}){/* -{getSubTotal()} */}
          </Link>
          <Link href='/checkout' className='text-white text-lg font-semibold ml-6 bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition'>
            Checkout
          </Link>
          <SignedIn>
            <span className=' text-white font-semibold'>Hello,{user?.username}</span>
            {/* <Link href='/sign-out'>Sign out</Link> */}
            <UserButton />
          </SignedIn>
          <SignedOut>
          <Link href='/sign-in' className='text-white text-lg  font-semibold ml-4 bg-gray-500 py-2 px-4 rounded'>Sign in</Link>
          <Link href='/sign-up' className='text-white text-lg  font-semibold ml-4 bg-gray-500 py-2 px-4 rounded'>Sign up</Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

export default Navbar