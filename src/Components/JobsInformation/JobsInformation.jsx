const JobsInformation = ({ jobDetails }) => {
  const {
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
  } = jobDetails;
  return (
    <div className="basis-1/2 ms-5 ">
      <p className="text-[20px] font-semibold mb-3">Job Description:</p>
      <p className="text-[16px] leading-7 mb-4"> {jobDescription}</p>
      <p className="text-[20px] font-semibold mb-3">Job Responsibility:</p>
      <p className="text-[16px] leading-7 mb-4"> {jobResponsibility}</p>
      <p className="text-[20px] font-semibold mb-3">
        Educational Requirements :
      </p>
      <p className="text-[16px] leading-7 mb-4">{educationalRequirements}</p>
      <p className="text-[20px] font-semibold mb-3">Experiences:</p>
      <p className="text-[16px] leading-7"> {experiences}</p>
    </div>
  );
};

export default JobsInformation;
