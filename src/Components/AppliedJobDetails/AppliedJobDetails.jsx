import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import HeroArea from "../HeroArea/HeroArea";
import JobDetailsCard from "../JobDetailsCard/JobDetailsCard";
import JobsInformation from "../JobsInformation/JobsInformation";

const AppliedJobDetails = () => {
  const detailsData = useLoaderData();
  const param = useParams();
  const appliedJobDetails = detailsData.find((apd) => apd.id == param.id);

  const navigate = useNavigate();

  const redirectHome = () => {
    navigate("/");
  };

  return (
    <div>
      <HeroArea>
        <div className="w-full bg-slate-200 h-16 pb-7">
          <h1 className="text-center text-2xl font-bold">
            Applied Job Details
          </h1>
        </div>
      </HeroArea>
      <div className="container mx-auto md:flex justify-between  py-[100px] block">
        <JobsInformation jobDetails={appliedJobDetails}></JobsInformation>
        <JobDetailsCard cardInfo={appliedJobDetails}>
          <button
            onClick={redirectHome}
            className="bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-[20px]   rounded-sm w-full h-[62px]  absolute bottom-0 left-0"
          >
            Back to Home
          </button>
        </JobDetailsCard>
      </div>
    </div>
  );
};

export default AppliedJobDetails;
