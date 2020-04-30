import React from "react";
import CompanyLogo from "./subcomponents/CompanyLogo";
import Details from "./subcomponents/Details";
import Stacks from "./subcomponents/Stacks";

const Jobs = ({ data }) => {
  const style= data.new && data.featured ? "bg-white border-l-4 border-teal-600 m-8 py-10 rounded shadow-lg md:flex md:py-4 lg:py-4 lg:flex md:justify-between lg:justify-between" :
  "bg-white m-8 py-10 rounded shadow-lg md:flex md:py-4 lg:py-4 lg:flex md:justify-between lg:justify-between"
  return (
    <section className=" m-1 ">
      <div className={style}>
        <div className=" md:flex lg:flex">
          <CompanyLogo logo={data.logo} />
          <div className="m-4  ">
            <Details data={data} />
          </div>
        </div>
        <div className="lg:flex flex justify-center items-center lg:pr-10">
          <Stacks data={data} />
        </div>
      </div>
     
    </section>
  );
};

export default Jobs;
