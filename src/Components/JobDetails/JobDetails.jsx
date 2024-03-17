import { useLoaderData, useParams } from "react-router-dom";
import HeroArea from "../HeroArea/HeroArea";
import JobDetailsCard from "../JobDetailsCard/JobDetailsCard";
import { addJobApplied } from "../LocalStored/LocalStored";
import JobsInformation from "./../JobsInformation/JobsInformation";

const JobDetails = () => {
  const jobData = useLoaderData();
  const { JobId } = useParams();
  const idInt = parseInt(JobId);
  const jobDetails = jobData.find((dt) => dt.id === idInt);
  const {
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    companyLocation,
    phone,
    email,
    jobName,
    id,
  } = jobDetails;

  const jobApplied = (id) => {
    console.log(id);
    addJobApplied(id);
  };

  return (
    <div className="w-full">
      <HeroArea>
        <div className=" w-full h-20 bg-slate-200 pb-7">
          <h1 className="text-2xl  text-center font-bold ">JOb Details</h1>
        </div>
      </HeroArea>
      <div className="container mx-auto md:flex justify-between  py-[100px] block">
        <JobsInformation jobDetails={jobDetails}></JobsInformation>
        <JobDetailsCard cardInfo={jobDetails}>
          <button
            onClick={() => jobApplied(id)}
            className="bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-[20px]   rounded-sm w-full h-[62px]  absolute bottom-0 left-0"
          >
            Apply
          </button>
        </JobDetailsCard>
      </div>
    </div>
  );
};

export default JobDetails;
