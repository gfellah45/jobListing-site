import React from "react";

export default function Details({ data }) {
  return (
    <div>
      <span className="text-xs text-teal-800 mr-6 md:mr-4 lg:mr-4 font-bold md:text-lg lg:text:lg ">
        {data.company}
      </span>

      {data.new ? (
        <span className="mx-1  p-2 uppercase text-white bg-teal-600 rounded-full sm">
          new!
        </span>
      ) : (
        ""
      )}

      {data.featured ? (
        <span className="mx-1  p-2 uppercase text-white bg-gray-900 rounded-full sm">
          featured
        </span>
      ) : (
        ""
      )}

      <div className="mt-4 pb-2 md:mt-2 lg:mt-2">
        <h2 className="font-bold text-lg text-gray-900 pos">{data.position}</h2>
      </div>

      <div className="pb-4 border-b-2 border-gray-500 md:border-none lg:border-none">
        <span className="text-gray-700 m-1 text-xs txt">{data.postedAt}</span>
        <span>&#183;</span>
        <span className="text-gray-700 m-1 text-xs txt">{data.contract}</span>
        <span>&#183;</span>
        <span className="text-gray-700 m-1 text-xs txt">{data.location}</span>
      </div>
    </div>
  );
}
