import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav((prev) => !prev)
  }
  return (
    <>
      <div className='flex items-center justify-between text-white relative'>
        {/* Logo */}
        <h1 className='text-2xl uppercase font-semibold text-fuchsia-500'>
          Gym brand.
        </h1>
        {/* Menu */}
        <div className='hidden lg:flex items-center space-x-8 font-medium '>
          <a href='#' className='navLink'>
            About Us
          </a>
          <a href='#' className='navLink'>
            Pricing
          </a>
          <a href='#' className='navLink'>
            Career
          </a>
          <a href='#' className='navLink'>
            Blog
          </a>
          {/* Button */}
          <a href='#' className='btn'>
            <p>Contact Us</p>
            <BsArrowRight size={20} className='stroke-1' />
          </a>
        </div>
        {/* Hamburger */}
        <div onClick={handleNav} className='lg:hidden'>
          {nav ? <IoClose size={32} /> : <FiMenu size={30} />}
        </div>
      </div>
      {/* Mobile Menu */}
      {nav && (
        <div className=' text-white absolute rounded-xl top-10 left-0 bg-slate-800  w-full flex flex-col items-center space-y-10 py-10 '>
          <a href='#'>About Us</a>
          <a href='#'>Pricing</a>
          <a href='#'>Career</a>
          <a href='#'>Blog</a>
          {/* Button */}
          <a
            href='#'
            className='px-8 py-3 bg-fuchsia-600 rounded-full flex items-center space-x-6'
          >
            <p>Contact Us</p>
            <BsArrowRight size={20} className='stroke-1' />
          </a>
        </div>
      )}
    </>
  )
}
export default Navbar
