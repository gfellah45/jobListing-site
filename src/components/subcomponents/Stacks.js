import React from "react";

export default function Stacks({ data }) {
  return (
    <div className="stacks">
      <span className="text-xs bg-teal-100 hover:bg-teal-700 hover:text-white text-teal-700 shadow-lg text-center p-1 rounded m-1 md:m-2 lg:m-2 cursor-pointer">{data.level}</span>
      <span className="text-xs bg-teal-100 hover:bg-teal-700 hover:text-white text-teal-700 shadow-lg text-center p-1 rounded m-1 md:m-2 lg:m-2 cursor-pointer">{data.role}</span>

      {data.languages
        ? data.languages.map((lan, ind) => (
            <span key={ind} className=" bg-teal-100 hover:bg-teal-700 hover:text-white shadow-lg text-center p-1 text-teal-700 rounded text-xs m-1 md:m-2 lg:m-2 cursor-pointer">
              {lan}
            </span>
          ))
        : ""}
      {data.tools
        ? data.tools.map((tool, ind) => <span className="bg-teal-100 hover:bg-teal-700 hover:text-white text-center shadow-lg text-teal-700 rounded p-1 m-1 text-xs md:m-2 lg:m-2 cursor-pointer" key={ind}>{tool}</span>)
        : ""}
    </div>
  );
}
