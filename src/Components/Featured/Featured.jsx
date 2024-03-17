import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const [featured, setFeatured] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);

  useEffect(() => {
    fetch("/featured.json")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  const navigate = useNavigate();
  const jobDetails = (id) => {
    navigate(`/details/${id}`);
  };

  const handleSeeAllJobs = () => {
    setShowAllJobs(true);
  };

  return (
    <div className="container mx-auto flex flex-col items-center ">
      <h2 className="sm:text-[48px] text-[35px]  text-center">Featured Jobs</h2>
      <p className="text-[16px] sm:font-[500] mt-[25px] mb-[32px] text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-[25px] rounded mb-10">
        {featured.slice(0, showAllJobs ? featured.length : 4).map((feature) => {
          return (
            <div
              key={feature.id}
              className="border border-[#E8E8E8] p-[40px] w-11/12 mx-auto"
            >
              <img src={feature.img} className="w-[150px] h-[100px] " alt="" />
              <p className="text-[24px] mt-[32px] text-[#47474]">
                {feature.jobName}
              </p>
              <p className="text-[20px] mt-[13px]">{feature.companyName}</p>
              <button className="w-[93px] h-[37px] border border-[#7e90fe] rounded text-[#7e90fe] my-[19px] duration-1000 hover:text-black hover:bg-[#7e90fe]">
                {feature.type}
              </button>
              <div className="sm:flex block items-center">
                <p className="flex items-center text-[16px] sm:text-[20px]">
                  <span className="md:me-[8px]">
                    <CiLocationOn />
                  </span>
                  {feature.companyLocation}
                </p>
                <p className="sm:ms-10 text-[20px]">
                  Salary : {feature.salary}
                </p>
              </div>
              <button
                onClick={() => jobDetails(feature.id)}
                className="bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-[20px] rounded-sm w-[170px] h-[62px] mt-[50px] mb-[44px]"
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>
      <button
        className={`bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-[20px]  rounded-sm w-[170px] h-[62px] mt-[50px] mb-[44px] ${
          featured.length >= 4 || "hidden"
        } ${showAllJobs && "hidden"}`}
        onClick={handleSeeAllJobs}
      >
        See All Jobs
      </button>
    </div>
  );
};

export default Featured;
