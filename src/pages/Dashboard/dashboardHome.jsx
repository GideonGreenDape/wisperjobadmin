import { WalletBalance, JobCard, CoursesCard } from "../../components/ui/card";
import Table from "../../components/layout/table";
import SearchBar from "../../components/ui/searchbar";
import { useState, useEffect } from "react";
import { getRequest } from "../../http/request";

function DashboardHome() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [walletBalance, setWalletBalance] = useState(0);
  const [numberOfCourses, setNumberOfCourses] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        
        const jobsResponse = await getRequest("/jobs");
        const jobsWithDefaults = jobsResponse.map((job) => ({
          ...job,
          status: job.status || "Active",
          application: job.application || "0 ",
        }));
        setJobs(jobsWithDefaults);
        setFilteredJobs(jobsWithDefaults);

        
        const walletResponse = await getRequest("/earnings/balance");
        setWalletBalance(walletResponse?.balance || 0);

        
        const coursesResponse = await getRequest("/courses/count");
        setNumberOfCourses(coursesResponse?.count || 0);

      } catch (err) {
        console.error("Failed to fetch dashboard data", err);
      }
    };

    fetchDashboardData();
  }, []);

  const handleSearch = (filtered) => {
    if (!filtered || filtered.length === 0) setFilteredJobs(jobs);
    else setFilteredJobs(
      filtered.map((job) => ({
        ...job,
        status: job.status || "Active",
        application: job.application || "0 Applications",
      }))
    );
  };

  return (
    <div className="flex flex-col mt-[35px] gap-[30px]">
      <div className="flex gap-[20px]">
        <JobCard amount={jobs.length || 0} />
        <CoursesCard numberOfCourses={numberOfCourses} />
        <WalletBalance balance={walletBalance.toLocaleString()} />
      </div>

      <SearchBar data={jobs} onSearch={handleSearch} width="w-[62vw]" />

      <div className="flex justify-between w-[70vw]">
        <h3 className="text-[12px]">Recents</h3>
        <p className="text-[11px] font-normal">See All</p>
      </div>

      <Table data={filteredJobs} width="w-[70vw]" />
    </div>
  );
}

export default DashboardHome;
