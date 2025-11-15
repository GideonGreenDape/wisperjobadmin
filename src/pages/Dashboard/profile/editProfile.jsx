import { useState, useEffect } from "react";
import Images from "../../../assets/images";
import Icons from "../../../assets/icons";
import { getRequest } from "../../../http/request";
import { useNavigate } from "react-router-dom";
import DeleteProfile from "../../../components/layout/deleteProfile";

function EditProfile({ name, industry }) {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false); 
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    industry: "",
    businessName: "",
    profilePhoto: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getRequest("/profile/basic");
        localStorage.setItem("User_profile", JSON.stringify(data));
        console.log(data);

        setProfile({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          phone: data.phone || "",
          industry: data.industry || "",
          businessName: data.businessName || "",
          profilePhoto: data.profilePhoto || "",
        });

        setLogged(true);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex flex-col items-center mt-[30px] justify-center h-full w-full">
      <div className="flex flex-col items-center rounded-[13px] border-[1px] border-[#2C2C2C] px-[80px] py-[50px] w-fit mt-[20px] gap-[15px]">
        <div>
          {logged ? (
            <img
              className="w-[100px] h-[100px] rounded-full"
              src={
                profile.profilePhoto
                  ? `${import.meta.env.VITE_API_FOR_IMAGE}${profile.profilePhoto}`
                  : Images.defaultimage
              }
              alt="profile"
            />
          ) : (
            <img
              className="w-[100px] h-[100px] rounded-full"
              src={Images.defaultimage}
              alt="profile"
            />
          )}
        </div>

        <div className="flex items-center gap-[30px] ">
          <h2 className="capitalize">
            {profile.firstName} {profile.lastName}
          </h2>
          <Icons.PencilLine
            onClick={(e) => {
              e.preventDefault();
              navigate("edit-profile");
            }}
            size={16}
            strokeWidth={0.8}
            className="cursor-pointer"
          />
        </div>

        <p className="font-normal text-[13px] !text-[#AEAEAE] ">
          Recruiter & Trainer
        </p>

        <div className="flex items-center gap-[20px] ">
          <p className="text-[14px] ">{profile.industry || industry}</p>
          <div className="flex text-[14px] items-center gap-[5px] ">
            <Icons.Dot size={19} strokeWidth={9} />
            {profile.businessName}
          </div>
        </div>

        <div className="flex items-center mt-[10px] ">
          <p className="font-light text-[13px] w-[220px] rounded-[5px] rounded-r-[0px] border-[#2C2C2C] text-center border-[0.8px] border-r-[0px] px-[10px] py-[16px]">
            {profile.email}
          </p>
          <p className="font-light text-[13px] w-[220px] rounded-[5px] rounded-l-[0px] border-[#2C2C2C] text-center border-[0.8px] px-[10px] py-[16px]">
            {profile.phone}
          </p>
        </div>

       
        <div
          className="flex items-center cursor-pointer gap-[10px] mt-[20px]"
          onClick={() => setShowDeleteModal(true)} // ✅ open modal
        >
          <Icons.Trash size={16} color="#FF231C" />
          <p className="text-[13px] !text-[#FF231C]">Delete profile</p>
        </div>
      </div>

      
      {showDeleteModal && (
        <DeleteProfile onClose={() => setShowDeleteModal(false)} />
      )}
    </div>
  );
}

export default EditProfile;
