import React, { useState, useEffect } from "react";
import data from "../assets/data.json";
import Jobs from "./Jobs";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs([...data]), []);
  
  return (
    <div className="bg-teal-100 py-16 lg:px-24">
      {jobs.map((e, ind) => (
        <Jobs key={ind} data={e} />
      ))}
    </div>
  );
};

export default JobList;
