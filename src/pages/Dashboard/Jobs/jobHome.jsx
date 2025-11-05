import { JobCards } from "../../../components/ui/card";
import Table from "../../../components/layout/table";
import SearchBar from "../../../components/ui/searchbar";
import Button from "../../../components/ui/button";
import { useState, useEffect } from "react";
import { getRequest } from "../../../http/request";

function JobHome() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getRequest("/jobs");
        console.log(response)
        setJobs(response);
        setFilteredJobs(response);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleSearch = (searchTerm) => {
  if (!searchTerm || searchTerm.trim() === "") {
    setFilteredJobs(jobs);
  } else {
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  }
};


  
  const jobsWithDefaults = filteredJobs.map((job) => ({
    ...job,
    status: job.status || "Active",
    application: job.application || "0",
  }));

  return (
    <div className="flex flex-col mt-[30px] gap-[30px] ">
      <Button
        size="smd"
        variant="secondary"
        className="text-[#ffffff]  rounded-[10px] "
        to={'/dashboard/jobs/create-job'}
      >
        Create a new job
      </Button>

      <div className="flex items-center gap-[20px] ">
        <JobCards
          label={"ACTIVE JOBS"}
          value={jobs.length.toString()}
          width={"w-[110px]"}
          height={"h-[110px]"}
        />
        <JobCards
          label={"JOBS CREATED"}
          value={jobs.length.toString()}
          width={"w-[110px]"}
          height={"h-[110px]"}
        />
      </div>

      <SearchBar data={jobs} onSearch={handleSearch} width="w-[62vw]" />

      <div className="flex justify-between w-[70vw] ">
        <h3 className="text-[12px] ">Recents</h3>
        <p className="text-[11px] font-normal ">See All</p>
      </div>

      {loading ? (
        <p className="text-[13px] text-gray-400">Loading jobs...</p>
      ) : (
        <Table data={jobsWithDefaults} width="w-[70vw] " />
      )}
    </div>
  );
}

export default JobHome;
