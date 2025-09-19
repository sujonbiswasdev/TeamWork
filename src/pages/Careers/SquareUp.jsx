
import { MyData } from "../../../public/data/data"

const SquareUp = () => {

  return (
    <>
        <section className='xl:w-[80%]  md:w-[85%] w-[90%] mx-auto py-14'>
         <div>
            <h4 className='xl:text-[48px]  md:text-[38px] text-[28px] font-semibold mb-2.5 '>At SquareUp</h4>
            <p className='xl:text-lg md:text-base text-sm text-[#E6E6E6] xl:max-w-[1196px] md:max-w-[950px] max-w-[326px]'>We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.</p>
            <div className=' bg-[#262626] w-fit py-2 px-2.5 rounded-md xl:mt-10 md:mt-5 mt-4 mb-4'>
                <p className='xl:text-lg md:text-base text-sm text-white'>Here are ten examples of our notable works:</p>
            </div>
         </div>
         {/* card part  */}
         <div className='grid lg:grid-cols-2  grid-cols-1 gap-10 md:gap-20 lg:gap-12 justify-center'>
         {MyData.map((item,index)=>(
            <div key={index} className='mt-10'>
              <h4 className='text-[26px]  md:text-[32px] xl:text-[40px] text-[#D8FF99] mb-4 xl:max-w-[560px]'>{item.title}</h4>
              <p className='text-[#98989A] text-sm md:text-base xl:text-lg mt-5 xl:max-w-[698px] md:max-w-[560px]  max-w-[310px]'>{item.des}</p>
            </div>
         ))}

         </div>

    
        
        </section>
    </>
  )
}

export default SquareUp