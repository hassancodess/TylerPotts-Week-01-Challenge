import { BsArrowRight } from 'react-icons/bs'
const Hero = () => {
  return (
    <>
      <div className='flex flex-col space-y-4 md:space-y-8 py-32 items-start text-white'>
        <p className='font-medium text-lg md:text-xl'>Gym station</p>
        <h1 className='max-w-lg text-4xl md:text-5xl lg:text-6xl font-semibold'>
          Take care of your health with our exercise plans.
        </h1>
        <p className='text-slate-500 max-w-lg text-md lg:text-lg'>
          We have been creating and implementing projects for many years all
          over the world, we have hundereds of satisfied customers.
        </p>
        <a href='#' className='btn'>
          <p>Read more</p>
          <BsArrowRight size={20} className='stroke-1' />
        </a>
      </div>
    </>
  )
}

export default Hero
