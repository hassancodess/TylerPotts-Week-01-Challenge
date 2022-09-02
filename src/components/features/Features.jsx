import React from 'react'
import FeatureCard from './FeatureCard'
import { data } from '../../data/data'

const Features = () => {
  return (
    <>
      <section className='-mt-28 z-50 relative  text-white pb-16'>
        <div className='max-w-6xl container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  '>
            {data.map((item, idx) => {
              return (
                <FeatureCard key={idx} title={item.title} desc={item.desc} />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
