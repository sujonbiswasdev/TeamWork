import React from 'react'
import Hero from './compo/Hero'
import SquareUp from './compo/SquareUp'
import Overview from './compo/Overview'
import Interest from './compo/Interest'
import From from './compo/From'

function Process() {
  return (
    <main className='bg-[#1E1E1E]'>
      <div className='w-full max-w-[1596px] mx-auto px-3 md:px-10'>
      <Hero />
      <SquareUp />
      <Overview />
      <Interest />
      <From />
      </div>
    </main>
  )
}

export default Process
