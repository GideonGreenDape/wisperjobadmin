import { NavLink } from "react-router-dom";
import Icons from "../../assets/icons";

function SideBar({ width }) {
  const navItems = [
    { icon: Icons.LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Icons.JobIcon, label: "Jobs", path: "/dashboard/jobs" },
    { icon: Icons.CourseIcon, label: "Courses", path: "/dashboard/courses" },
    { icon: Icons.WalletIcon, label: "Wallet", path: "/dashboard/wallet" },
    { icon: Icons.ProfileIcon, label: "Profile", path: "/dashboard/profile" },
  ];

  const bottomNav = [
    { icon: Icons.Support, label: "Help Center", path: "/help" },
    { icon: Icons.LogOut, label: "Logout", path: "/logout" },
  ];

  return (
    <div className={`w-${width} h-screen flex flex-col bg-[#000] pl-[50px] gap-[35px]`}>
      
      <div>
        <img
          className="w-[95px] h-[95px]"
          src={Icons.WisperIcon}
          alt="wisper icon"
        />
      </div>

     
      <div className="flex flex-col gap-[15px] mt-[15px]">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-[8px] cursor-pointer no-underline ${
                isActive ? " text-[#ffffff] " : " !text-[#168DE1] "
              }`
            }
          >
            <item.icon className="w-[18px] " />
            <p className="text-[13px]">{item.label}</p>
          </NavLink>
        ))}
      </div>

      
      <div className="flex flex-col gap-[10px] mt-[210px] ">
        {bottomNav.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-[10px] cursor-pointer no-underline  ${
                isActive ? "text-[#168DE1]" : "text-white"
              }`
            }
          >
            <item.icon className="w-[16px] " />
            <p className="text-[13px] ">{item.label}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
