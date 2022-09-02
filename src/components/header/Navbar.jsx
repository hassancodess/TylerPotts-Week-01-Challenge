import { BsArrowRight } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between text-white'>
        {/* Logo */}
        <h1 className='text-2xl uppercase font-semibold'>Gym brand.</h1>
        {/* Menu */}
        <div className='hidden lg:flex items-center space-x-8 font-medium '>
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
        {/* Hamburger */}
        <FiMenu className='lg:hidden' size={30} />
      </div>
    </>
  )
}

export default Navbar
