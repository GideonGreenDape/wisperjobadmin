import { JobCards } from "../../../components/ui/card";
import Table from "../../../components/layout/table";
import SearchBar from "../../../components/ui/searchbar";
import { jobData } from "../../../config/dummyData";
import { useState } from "react";
import Button from "../../../components/ui/button";

function JobHome() {
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  const handleSearch = (filtered) => {
    if (filtered.length === 0) setFilteredJobs(jobData);
    else setFilteredJobs(filtered);
  };
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
          value={"35"}
          width={"w-[110px]"}
          height={"h-[110px]"}
        />
        <JobCards
          label={"JOBS CREATED"}
          value={"135"}
          width={"w-[110px]"}
          height={"h-[110px]"}
        />
      </div>
      <SearchBar data={jobData} onSearch={handleSearch} width="w-[62vw]" />
      <div className="flex justify-between w-[70vw]  ">
        <h3 className="text-[12px] ">Recents</h3>
        <p className="text-[11px] font-normal ">See All</p>
      </div>
      <Table data={filteredJobs} width="w-[70vw] " />
    </div>
  );
}

export default JobHome;
