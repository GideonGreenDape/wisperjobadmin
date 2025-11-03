import { Outlet } from "react-router-dom";

function Jobs() {
  return (
   <div className="flex-1 flex-1 overflow-y-auto custom-scrollbar">
        <Outlet />
      </div>
   
  );
}

export default Jobs;
