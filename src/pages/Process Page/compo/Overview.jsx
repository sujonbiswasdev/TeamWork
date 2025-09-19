import React from 'react'
import overview from './overview.json'

function Overview() {
  return (
    <section className='py-7 md:py-10 space-y-7'>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 space-y-5'>
        {
            overview.map((items) => (
                <div key={items.id}>
                    <div className='flex items-center  gap-3 space-y-4'>
                    <span className='block font-bold text-[#D8FF99] text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2.5 md:mt-0'>{items.number}</span>
                    <h4 className='text-[#98989A] text-xl'>{items.title}</h4>
                    </div>
                    <p className='text-[#98989A] text-base max-w-[700px]'>{items.description}</p>
                </div>
            ))
        }
      </div>
       

    </section>
  )
}

export default Overview
