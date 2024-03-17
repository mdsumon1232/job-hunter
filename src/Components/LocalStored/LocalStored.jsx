import toast from "react-hot-toast";

const getAppliedJob = () => {
  const storedJobApplication = localStorage.getItem("job-applications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const addJobApplied = (id) => {
  const storedJobApplications = getAppliedJob();
  const exists = storedJobApplications.find((jobId) => jobId === id);
  if (!exists) {
    storedJobApplications.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplications)
    );
    toast("Job applied successfully");
  } else {
    toast("Already applied this job");
  }
};

export { addJobApplied, getAppliedJob };
