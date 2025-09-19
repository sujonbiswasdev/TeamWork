import React from 'react'

const Hero = () => {
  return (
    <section className='bg-[url(/images/home/hero.png)] bg-cover bg-center text-white py-16'>
      <div className='container mx-auto text-center px-4'>
        <h1 className='font-bold leading-snug mb-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>A Digital Product Studio <br />that will Work</h1>

        <div className='bg-gray-900 flex flex-wrap justify-center gap-3 mb-8 px-8 py-6 rounded-2xl'>
          <p className='text-gray-400'>For</p>
          <button className='px-4 py-2 bg-gray-800 text-sm rounded-md hover:bg-gray-700 transition'>Startups</button>
          <p className='text-gray-400 text-center'>,</p>

          <button className='px-4 py-2 bg-gray-800 text-sm rounded-md hover:bg-gray-700 transition'>Enterprise leaders</button>
          <p className='text-gray-400'>,</p>

          <button className='px-4 py-2 bg-gray-800 text-sm rounded-md hover:bg-gray-700 transition'>Media & Publishers</button>
          <p className='text-gray-400 '>,</p>

          <button className='px-4 py-2 bg-gray-800 text-sm rounded-md hover:bg-gray-700 transition'>Social Good</button>
          <p className='text-gray-400 '>and</p>
        </div>

        <div className='flex justify-center gap-2'>
          <img src="" alt="" />
          <button className='px-6 py-3 text-white rounded-md border-1 border-gray-700 bg-gray-800 hover:bg-gray-700 hover:text-black transition'>Our Works</button>
          <button className='px-6 py-3 bg-lime-400 text-black font-medium rounded-md hover:bg-lime-500 transition'>Contact Us</button>
        </div>
      </div>  
    </section>
  )
}

export default Hero
