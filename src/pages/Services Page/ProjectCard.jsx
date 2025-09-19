import React from "react";
import { ProjectPlanning, AgileDevelopment, QualityTesting } from "../../../public/data/CardData";
function ProjectCard() {
  return (
    <div className="border border-gray-700 w-[90%] mx-auto">
      <section className="px-10 pt-20 border border-gray-700">
        <h2 className="text-3xl font-semibold mb-5">Project Management</h2>
        <p className="text-[#E6E6E6]/90 mb-8">
          Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.
        </p>
        <button className="bg-[#191919] px-3 py-2 rounded-lg mb-4">
          Our project management services include:
        </button>
      </section>
      <section>
        <h3 className="font-medium text-xl px-10 py-10 text-[#98989A]">
         Project Planning and Scoping
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {ProjectPlanning.map((item, index) => (
            <div key={index} className="border border-gray-700 p-[50px]">
              <img src={item.img} alt="" className="mb-6" />
              <h6>{item.title}</h6>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="font-medium text-xl px-10 py-10 text-[#98989A]">
         Agile Development
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {AgileDevelopment.map((item, index) => (
            <div key={index} className="border border-gray-700 p-[50px]">
              <img src={item.img} alt="" className="mb-6" />
              <h6>{item.title}</h6>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="font-medium text-xl px-10 py-10 text-[#98989A]">
          Quality Assurance and Testing
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {QualityTesting.map((item, index) => (
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

export default ProjectCard;
