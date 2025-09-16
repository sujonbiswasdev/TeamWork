import React from 'react'

function Hero() {
  return (
    <section className='bg-[url(/images/process/process-hero-banner.png)] bg-cover bg-no-repeat'>
      <div className='flex items-center justify-center text-center flex-col py-8 md:py-12 lg:py-16 space-y-3'>
        <h2 className='font-bold leading-tight text-2xl md:text-3xl lg:text-4xl text-shadow-lg w-80 md:w-full'>Process of Starting the Project</h2>
        <p className='text-base  text-[#E6E6E6]'>At SquareUp, we value transparency, collaboration, and delivering exceptional results.</p>
      </div>
    </section>
  )
}

export default Hero
