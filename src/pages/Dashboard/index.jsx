import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../../components/layout/sidebar";
import MiniHeader from "../../components/layout/miniHeader";

function Dashboard() {
  const location = useLocation();

  
  const pathParts = location.pathname.split("/");

  
  let section = pathParts[2] || "dashboard";

  
  if (["create-job", "edit-profile", "job-details"].includes(section)) {
    section = pathParts[2 - 1]; 
  }

  
  const displayName = section.charAt(0).toUpperCase() + section.slice(1);

  return (
    <div className="flex min-h-screen bg-[#151515] text-white">
     
      <div className="fixed left-0 top-0 h-screen w-[300px] bg-[#121212]">
        <SideBar width={"w-[250px]"} />
      </div>

      
      <div className="flex flex-col flex-1 ml-[350px] p-6">
        <div className="mb-6 flex">
          
          <MiniHeader width="w-[70vw]" display={displayName} />
        </div>

        
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
