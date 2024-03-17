import { CiLocationOn } from "react-icons/ci";
import { useLoaderData, useNavigate } from "react-router-dom";
import HeroArea from "../HeroArea/HeroArea";

const Applied = () => {
  const appliedJobs = useLoaderData();
  const navigate = useNavigate();
  const jobDetails = (id) => {
    navigate(`/applied/jobs/detail/${id}`);
  };

  return (
    <div className="h-screen">
      <HeroArea>
        <div className="w-full bg-slate-200 h-16 pb-7 ">
          <h1 className="text-2xl text-center font-bold "> Applied Job</h1>
        </div>
      </HeroArea>
      <div>
        {appliedJobs.length === 0 && (
          <p className="text-center mt-14 text-4xl ">No Job Applied 😒</p>
        )}
        {appliedJobs.map((job) => {
          const {
            id,
            img,
            jobName,
            salary,
            type,
            companyName,
            companyLocation,
          } = job;
          return (
            <div
              key={id}
              className="container mx-auto flex md:flex-row flex-col
               my-[150px] md:h-[240px] p-[30px] border rounded border-[#E8E8E8] items-center"
            >
              <img src={img} alt="" className="w-[180px] h-[180px] rounded" />
              <div className="grow ms-[30px]">
                <p className="text-[24px]">{jobName}</p>
                <p className="text-[18px] my-2">{companyName}</p>
                <button className="w-[93px] h-[37px] border border-[#7e90fe] rounded text-[#7e90fe] my-[19px] duration-1000 hover:text-black hover:bg-[#7e90fe]">
                  {type}
                </button>
                <div className="flex items-center">
                  <p className="flex items-center text-[18px]">
                    <span className="me-2">
                      <CiLocationOn />
                    </span>
                    {companyLocation}
                  </p>
                  <p className="ms-10 text-[18px]">Salary: {salary}</p>
                </div>
              </div>
              <button
                onClick={() => jobDetails(id)}
                className="bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-[20px] rounded-sm w-[170px] h-[62px] mt-[50px] mb-[44px]"
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Applied;
