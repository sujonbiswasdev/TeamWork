import React from 'react'
import Hero from './compo/Hero'
import SquareUp from './compo/SquareUp'
import Overview from './compo/Overview'

function Process() {
  return (
    <main className='bg-[#1E1E1E]'>
      <Hero />
      <div className='w-full max-w-[1596px] mx-auto px-3 md:px-10'>
      <SquareUp />
      <Overview />
      </div>
    </main>
  )
}

export default Process
