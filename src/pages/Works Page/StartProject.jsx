import React from "react";


const StartProject = () => {
  return (
    <div className="xl:w-[85%]  md:w-[85%] w-[90%] mx-auto py-14 ">
      <div className='bg-[url(/images/works/Container.png)] w-full bg-center bg-cover xl:h-[500px] md:h-[500px] h-[463px]'>
        <div className="bg-black/70 w-full bg-no-repeat bg-center bg-cover xl:h-[500px] md:h-[500px] h-[463px]">
            <div className=" flex flex-col items-center justify-center md:pt-14 xl:pt-16 pt-11 md:px-5">
                <img className="xl:w-size-[80px] md:size-[60px] size-[50px] xl:mb-5 mb-3" src=" /images/works/startLogo.png"/>
                <h2 className="xl:text-[38px] md:text-[30px] text-2xl font-semibold xl:max-w-[896px] md:max-w-[780px] max-w-[326px] mx-auto my-3 md:my-4 text-center">Let us Bring your Ideas to Life in the Digital World.</h2>
                <p className="xl:text-lg md:text-base text-sm text-[#E6E6E6] xl:max-w-[896px] md:max-w-[780px] max-w-[326px] mx-auto text-center">No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.</p>

                <button className="py-[14px] px-[24px] bg-[#9EFF00] rounded-md text-[#1A1A1A] xl:mt-20 md:mt-14 mt-12 text-sm font-medium">Start Project</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StartProject;
