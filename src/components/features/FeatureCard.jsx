import React from 'react'
import { BsFillStarFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

const FeatureCard = ({ title, desc }) => {
  return (
    <div className='border border-slate-800  rounded-lg px-6 py-8 hover:bg-black/70 duration-500 ease-in-out group'>
      <div className='flex flex-col space-y-6'>
        {/* Icon */}
        <div className='w-16 h-16 rounded-full border border-slate-700 flex items-center justify-center text-fuchsia-500 group-hover:bg-fuchsia-500 group-hover:text-white duration-500 ease-in-out'>
          <BsFillStarFill size={25} />
        </div>
        {/* Title */}
        <h1 className='text-2xl font-semibold'>{title}</h1>
        {/* Desc */}
        <p className='max-w-md text-slate-400 line-clamp-5'>{desc}</p>
        {/* Button */}
        <a className='flex space-x-4 items-center hover:text-fuchsia-500 duration-500 ease-in-out'>
          <p>Read more</p>
          <BsFillArrowRightCircleFill />
        </a>
      </div>
    </div>
  )
}

export default FeatureCard
