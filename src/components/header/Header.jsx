import Navbar from './Navbar'
import Hero from './Hero'

const Header = () => {
  return (
    <>
      <div className='bg-slate-900 p-4 pb-32 bg-hero bg-cover bg-no-repeat relative'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent  to-slate-900'></div>
        {/* Header */}
        <div className='z-10 relative container mx-auto max-w-6xl flex flex-col'>
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  )
}

export default Header
