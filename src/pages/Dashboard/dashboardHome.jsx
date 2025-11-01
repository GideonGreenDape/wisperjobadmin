import { WalletBalance, JobCard, CoursesCard } from "../../components/ui/card";
import Table from "../../components/layout/table";

function DashboardHome() {
 const jobData = [
  { jobTitle: "Frontend Developer", jobType: "Full-time", company: "Techverse Labs", application: "24 Applications", status: "Active" },
  { jobTitle: "Backend Engineer", jobType: "Contract", company: "NovaStack", application: "12 Applications", status: "Inactive" },
  { jobTitle: "UI/UX Designer", jobType: "Part-time", company: "Cloudify Studio", application: "8 Applications", status: "Active" },
  { jobTitle: "Data Analyst", jobType: "Full-time", company: "InsightWorks", application: "15 Applications", status: "Active" },
  { jobTitle: "Mobile Developer", jobType: "Internship", company: "SoftLink Systems", application: "4 Applications", status: "Inactive" },
  { jobTitle: "DevOps Engineer", jobType: "Full-time", company: "BluePeak Technologies", application: "19 Applications", status: "Active" },
  { jobTitle: "Project Manager", jobType: "Contract", company: "NextGen Solutions", application: "10 Applications", status: "Active" },
  { jobTitle: "QA Tester", jobType: "Full-time", company: "PrimeEdge", application: "6 Applications", status: "Inactive" },
  { jobTitle: "Cloud Engineer", jobType: "Full-time", company: "SkyBridge IT", application: "22 Applications", status: "Active" },
  { jobTitle: "Security Analyst", jobType: "Part-time", company: "CyberNova", application: "9 Applications", status: "Inactive" },
  { jobTitle: "Machine Learning Engineer", jobType: "Full-time", company: "AIMinds", application: "14 Applications", status: "Active" },
  { jobTitle: "Technical Writer", jobType: "Contract", company: "DocuTech", application: "3 Applications", status: "Inactive" },
  { jobTitle: "System Administrator", jobType: "Full-time", company: "InfraCore", application: "17 Applications", status: "Active" },
  { jobTitle: "Blockchain Developer", jobType: "Contract", company: "ChainLogic", application: "7 Applications", status: "Inactive" },
  { jobTitle: "React Native Developer", jobType: "Full-time", company: "MobileCraft", application: "21 Applications", status: "Active" },
  { jobTitle: "AI Researcher", jobType: "Internship", company: "DeepVision AI", application: "5 Applications", status: "Inactive" },
  { jobTitle: "Technical Support Engineer", jobType: "Full-time", company: "HelpSphere", application: "18 Applications", status: "Active" },
  { jobTitle: "Product Designer", jobType: "Contract", company: "DesignFlow", application: "11 Applications", status: "Inactive" },
  { jobTitle: "Database Administrator", jobType: "Full-time", company: "DataForge", application: "13 Applications", status: "Active" },
  { jobTitle: "Content Strategist", jobType: "Part-time", company: "MediaHub", application: "6 Applications", status: "Inactive" },
  { jobTitle: "Software Architect", jobType: "Full-time", company: "CodeSmiths", application: "16 Applications", status: "Active" },
  { jobTitle: "Network Engineer", jobType: "Contract", company: "FiberCore", application: "8 Applications", status: "Inactive" },
  { jobTitle: "UI Developer", jobType: "Full-time", company: "PixelLabs", application: "25 Applications", status: "Active" },
  { jobTitle: "Automation Engineer", jobType: "Full-time", company: "Testify", application: "10 Applications", status: "Active" },
  { jobTitle: "Game Developer", jobType: "Contract", company: "ArcadeWorks", application: "12 Applications", status: "Inactive" },
  { jobTitle: "Full Stack Engineer", jobType: "Full-time", company: "StackForge", application: "23 Applications", status: "Active" },
  { jobTitle: "Marketing Analyst", jobType: "Part-time", company: "AdNova", application: "9 Applications", status: "Inactive" },
  { jobTitle: "Cloud Solutions Architect", jobType: "Full-time", company: "NimbusTech", application: "14 Applications", status: "Active" },
  { jobTitle: "IT Support Specialist", jobType: "Full-time", company: "ByteCare", application: "7 Applications", status: "Inactive" },
  { jobTitle: "Software Engineer", jobType: "Full-time", company: "CodeBridge", application: "27 Applications", status: "Active" },
];


    return(
       <div className="flex flex-col ml-[130px] mt-[35px] ">
        <div className="flex gap-[20px] " >
          <JobCard amount={120} />
          <CoursesCard numberOfCourses={80} />
          <WalletBalance balance={"250,000.00"} />
        </div>
        <div className="flex justify-between w-[840px] mt-[40px] ">
          <h3 className="text-[12px] ">Recent</h3>
          <p className="text-[12px] ">See All</p>
        </div>
        <Table data={jobData} />
       </div>
    )
}


export default DashboardHome;