import { Outlet } from "react-router-dom";

function Profile() {
    return(
         <div className="flex-1 flex-1 overflow-y-auto custom-scrollbar">
        <Outlet />
      </div>
    )
}

export default Profile;