import React from "react";
import {
  WebDevelopment,
  AppDevelopment,
  SoftwareDevelopment,
} from "../../../public/data/CardData";
function EngineeringCard() {
  return (
    <div className="border border-gray-700 w-[90%] mx-auto">
      <section className="px-10 pt-20 border border-gray-700">
        <h2 className="text-3xl font-semibold mb-5">Engineering</h2>
        <p className="text-[#E6E6E6]/90 mb-8">
          Our engineering team combines technical expertise with a passion for
          innovation to build robust and scalable digital solutions. We leverage
          the latest technologies and best practices to deliver high-performance
          applications tailored to your specific needs.
        </p>
        <button className="bg-[#191919] px-3 py-2 rounded-lg mb-4">
          Our engineering services include:
        </button>
      </section>
      <section>
        <h3 className="font-medium text-xl px-10 py-10 text-[#98989A]">
          Web Development
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {WebDevelopment.map((item, index) => (
            <div key={index} className="border border-gray-700 p-[50px]">
              <img src={item.img} alt="" className="mb-6" />
              <h6>{item.title}</h6>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="font-medium text-xl px-10 py-10 text-[#98989A]">
          Mobile App Development
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {AppDevelopment.map((item, index) => (
            <div key={index} className="border border-gray-700 p-[50px]">
              <img src={item.img} alt="" className="mb-6" />
              <h6>{item.title}</h6>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="font-medium text-xl px-10 py-10 text-[#98989A]">
          Custom Software Development
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {SoftwareDevelopment.map((item, index) => (
            <div key={index} className="border border-gray-700 p-[50px]">
              <img src={item.img} alt="" className="mb-6" />
              <h6>{item.title}</h6>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default EngineeringCard;
