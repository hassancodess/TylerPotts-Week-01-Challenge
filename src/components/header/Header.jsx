import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <div className='bg-slate-900 min-h-screen p-4'>
        <div className='container mx-auto max-w-6xl bg-slate-800'>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default Header
