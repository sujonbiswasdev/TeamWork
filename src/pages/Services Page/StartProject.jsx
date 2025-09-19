import React from 'react'

function StartProject() {
  return (
    <>
        <section className='bg-[url(/images/service/service-hero-banner.png)] bg-cover bg-black/70 bg-blend-multiply border border-gray-700 w-[90%] mx-auto p-10 lg:px-[300px] lg:py-[100px]'>
            <div className='flex flex-col justify-center items-center gap-6'>
                <img src="/images/Logo.webp" alt="" />
                <h3 className='text-2xl font-semibold'>Let us Bring your Ideas to Life in the Digital World.</h3>
                <p className='text-center text-[#E6E6E6]/90'>No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.</p>
                <button className='bg-[#9EFF00] px-[34px] py-[18px] rounded-lg text-[#1A1A1A] font-medium hover:bg-[#9EFF00]/70 transition'>Start Project</button>
            </div>
        </section>
    </>
  )
}

export default StartProject