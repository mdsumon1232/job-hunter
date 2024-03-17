import { getAppliedJob } from "../LocalStored/LocalStored";

const appliedJob = async () => {
  const res = await fetch("/public/featured.json");
  const data = await res.json();
  const appliedJobs = getAppliedJob(); // Assuming getAppliedJob() returns an array of IDs

  const storedApplied = [];

  if (Array.isArray(data)) {
    for (const id of appliedJobs) {
      const matchingJobs = data.filter((apply) => apply.id === id);
      storedApplied.push(...matchingJobs);
    }
  } else {
    console.error("Data returned is not an array:", data);
  }

  return storedApplied;
};

export default appliedJob;
