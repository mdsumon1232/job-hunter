const JobDetailsCard = ({ cardInfo, children }) => {
  const { salary, companyLocation, phone, email, jobName, id } = cardInfo;
  return (
    <div className="basis-1/4 h-[450px] md:me-5 bg-slate-200 md:mt-0 mt-16 p-[30px] relative rounded z-0">
      <h3 className="text-[20px] font-bold mb-[20px]">Job Details</h3>

      <p className="text-[16px] mt-[10px]">
        <span className=" font-semibold">Job Title</span> : {jobName}
      </p>
      <p className="text-[16px] mt-[10px]">
        <span className="font-semibold">Salary</span>: {salary}
      </p>

      <h3 className="text-[20px] my-[20px] font-bold">Contact Information</h3>
      <p className="text-[18px] text-[#000] mb-[10px]">Phone: {phone}</p>
      <p className="text-[18px] text-[#000] mb-[10px]">Email: {email}</p>
      <p className="text-[18px] text-[#000] mb-[10px]">
        Location: {companyLocation}
      </p>
      {children}
    </div>
  );
};

export default JobDetailsCard;
