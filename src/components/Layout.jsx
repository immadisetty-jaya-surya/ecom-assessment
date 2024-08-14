import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
        {/* <p>layout</p> */}
        <Navbar />
        <main className='container mx-auto p-4'>{children}</main>
    </>
  )
}

export default Layout