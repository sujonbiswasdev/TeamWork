import React from "react";


const ContactHero = () => {
  return (
    <div className="xl:w-[90%] lg:w-[90%] md:w-[85%] w-[90%] mx-auto pt-14">
        <div className="bg-[url(/images/Contact/bgimg.png)] xl:h-[372px] md:h-[310px] h-[212px] w-full bg-cover bg-center "
    >
      <div className=" bg-black/75 xl:h-[372px] md:h-[310px] h-[212px] mx-auto  w-full">
        <div className="text-center lg:pt-20  md:pt-16 pt-7 ">
          <h2 className="xl:text-[48px]  md:text-[38px] text-[28px] font-semibold xl:pt-[24px] lg:pt-2xl ">
           Contact Us
          </h2>
          <p className="text-sm md:text-lg  text-[#E6E6E6] xl:max-w-[996px] md:max-w-[780px] max-w-[326px] mx-auto mt-3 ">
            Get in touch with us today and let us help you with any questions or inquiries you may have.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactHero  ;
