import React from "react";
import { Accordion, AccordionItem, Avatar } from "@heroui/react";

const Faqpage = () => {
  return (
    <section className="xl:w-[90%] lg:w-[90%] md:w-[85%] w-[90%] mx-auto py-14 ">
      <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-0  ">
        {/* left  */}
        <div className="border border-gray-800" >
          <Accordion  >

            <AccordionItem
              aria-label="What services does SquareUp provide?"
              title={
                <span className="text-[#C5FF66] text-lg font-medium  ">
                  What services does SquareUp provide?
                </span>
              }
             
            >
             <p className=" text-[#E6E6E6] text-base"> SquareUp offers a range of services including design, engineering,
              and project management. We specialize in user experience design,
              web development, mobile app development, custom software
              development, branding and identity, and more.</p>
            </AccordionItem>

            <AccordionItem
              aria-label="How can SquareUp help my business?"
              title={
                <span className="text-[#FFFFFF] text-lg font-medium ">
                 How can SquareUp help my business?
                </span>
              }
             
            >
             <p className=" text-[#E6E6E6] text-base"> SquareUp offers a range of services including design, engineering,
              and project management. We specialize in user experience design,
              web development, mobile app development, custom software
              development, branding and identity, and more.</p>
            </AccordionItem>


            <AccordionItem
              aria-label="What industries does SquareUp work with?"
              title={
                <span className="text-[#FFFFFF] text-lg font-medium ">
                  What industries does SquareUp work with?
                </span>
              }
             
            >
             <p className=" text-[#E6E6E6] text-base"> SquareUp offers a range of services including design, engineering,
              and project management. We specialize in user experience design,
              web development, mobile app development, custom software
              development, branding and identity, and more.</p>
            </AccordionItem>

            <AccordionItem
              aria-label="How long does it take to complete a project with SquareUp?"
              title={
                <span className="text-[#FFFFFF] text-lg font-medium ">
                 How long does it take to complete a project with SquareUp?
                </span>
              }
            
            >
             <p className=" text-[#E6E6E6] text-base"> SquareUp offers a range of services including design, engineering,
              and project management. We specialize in user experience design,
              web development, mobile app development, custom software
              development, branding and identity, and more.</p>
            </AccordionItem>

          </Accordion>
        </div>

        {/* right  */}
        <div className="border border-gray-800">
            <Accordion >

            <AccordionItem
              aria-label="Do you offer ongoing support and maintenance after the project is completed?"
              title={
                <span className="text-[#FFFFFF] text-lg font-medium ">
                 Do you offer ongoing support and maintenance after the project is completed?
                </span>
              }
             
            >
             <p className=" text-[#E6E6E6] text-base"> SquareUp offers a range of services including design, engineering,
              and project management. We specialize in user experience design,
              web development, mobile app development, custom software
              development, branding and identity, and more.</p>
            </AccordionItem>

            <AccordionItem
              aria-label="Can you work with existing design or development frameworks?"
              title={
                <span className="text-[#FFFFFF] text-lg font-medium ">
                 Can you work with existing design or development frameworks?
                </span>
              }
            
            >
             <p className=" text-[#E6E6E6] text-base"> SquareUp offers a range of services including design, engineering,
              and project management. We specialize in user experience design,
              web development, mobile app development, custom software
              development, branding and identity, and more.</p>
            </AccordionItem>


            <AccordionItem
              aria-label="How involved will I be in the project development process?"
              title={
                <span className="text-[#FFFFFF] text-lg font-medium ">
                 How involved will I be in the project development process?
                </span>
              }
             
            >
             <p className=" text-[#E6E6E6] text-base"> SquareUp offers a range of services including design, engineering,
              and project management. We specialize in user experience design,
              web development, mobile app development, custom software
              development, branding and identity, and more.</p>
            </AccordionItem>

            <AccordionItem
              aria-label="Can you help with website or app maintenance and updates?"
              title={
                <span className="text-[#FFFFFF] text-lg font-medium ">
                Can you help with website or app maintenance and updates?
                </span>
              }
             
            >
             <p className=" text-[#E6E6E6] text-base"> SquareUp offers a range of services including design, engineering,
              and project management. We specialize in user experience design,
              web development, mobile app development, custom software
              development, branding and identity, and more.</p>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqpage;
