import React from "react";
import { UXDesign, UIDesign, Branding } from "../../../public/data/CardData";
function DesignCard() {
  return (
    <div className="border border-gray-700 w-[90%] mx-auto">
      <section className="px-10 pt-20 border border-gray-700">
        <h2 className="text-3xl font-semibold mb-5">Design</h2>
        <p className="text-[#E6E6E6]/90 mb-8">
          At Squareup, our design team is passionate about creating stunning,
          user-centric designs that captivate your audience and elevate your
          brand. We believe that great design is not just about aesthetics; it's
          about creating seamless and intuitive user experiences.
        </p>
        <button className="bg-[#191919] px-3 py-2 rounded-lg mb-4">
          Our design services include:
        </button>
      </section>
      <section>
        <h3 className="font-medium text-xl px-10 py-10 text-[#98989A]">
          User Experience (UX) Design
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {UXDesign.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 p-[20px] lg:p-[50px]"
            >
              <img src={item.img} alt="" className="mb-6" />
              <h6>{item.title}</h6>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="font-medium text-xl px-10 py-10 text-[#98989A]">
          User Interface (UI) Design
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {UIDesign.map((item, index) => (
            <div key={index} className="border border-gray-700 p-[20px] lg:p-[50px]">
              <img src={item.img} alt="" className="mb-6" />
              <h6>{item.title}</h6>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="font-medium text-xl px-10 py-10 text-[#98989A]">
          Branding and Identity
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {Branding.map((item, index) => (
            <div key={index} className="border border-gray-700 p-[20px] lg:p-[50px]">
              <img src={item.img} alt="" className="mb-6"/>
              <h6>{item.title}</h6>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DesignCard;
