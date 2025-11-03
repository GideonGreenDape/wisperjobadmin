import { WalletBalance, JobCard, CoursesCard } from "../../components/ui/card";
import Table from "../../components/layout/table";
import SearchBar from "../../components/ui/searchbar";
import { jobData } from "../../config/dummyData";
import { useState } from "react";

function DashboardHome() {
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  const handleSearch = (filtered) => {
    if (filtered.length === 0) setFilteredJobs(jobData);
    else setFilteredJobs(filtered);
  };

  return (
    <div className="flex flex-col  mt-[35px] gap-[30px] ">
      <div className="flex gap-[20px] ">
        <JobCard amount={120} />
        <CoursesCard numberOfCourses={80} />
        <WalletBalance balance={"250,000.00"} />
      </div>
      <SearchBar data={jobData} onSearch={handleSearch} width="w-[62vw]" />
      <div className="flex justify-between w-[70vw]  ">
        <h3 className="text-[12px] ">Recents</h3>
        <p className="text-[11px] font-normal ">See All</p>
      </div>
      <Table data={filteredJobs} width='w-[70vw] ' />
    </div>
  );
}

export default DashboardHome;
