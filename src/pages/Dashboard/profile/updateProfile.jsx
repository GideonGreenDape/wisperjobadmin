import Input from "../../../components/ui/Input";
import { useNavigate } from "react-router-dom";
import { jobs } from "../../../config/dropdowns";
import { useState, useRef } from "react";
import Select from "../../../components/forms/select";
import Images from "../../../assets/images";
import {
  postRequest,
  deleteRequest,
  uploadRequest,
} from "../../../http/request";
import { useToast } from "../../../components/Toast/ToastContext";
import Button from "../../../components/ui/button";

function UpdateProfile() {
  const dataString = localStorage.getItem("User_profile");
  const data = dataString ? JSON.parse(dataString) : {};

  const [firstName, setFirstName] = useState(data.firstName || "");
  const [lastName, setLastName] = useState(data.lastName || "");
  const [businessName, setBusinessName] = useState(data.businessName || "");
  const [phone, setPhone] = useState(data.phone || "");
  const [email, setEmail] = useState(data.email || "");
  const [selectedJob, setSelectedJob] = useState(data.industry || "");
  const [profilePhoto, setProfilePhoto] = useState(data.profilePhoto || "");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const previewURL = URL.createObjectURL(file);
      setProfilePhoto(previewURL); 
    }
  };

  const handleSubmitProfile = async () => {
    try {
      setLoading(true);

      let uploadedPhoto = data.profilePhoto || "";

      
      if (selectedFile) {
        const formData = new FormData();
        formData.append("photo", selectedFile);

        const uploadResponse = await uploadRequest(
          "/profile/photo",
          formData
        );

        uploadedPhoto = uploadResponse?.profile?.profilePhoto || uploadedPhoto;

        setProfilePhoto(uploadedPhoto);
        data.profilePhoto = uploadedPhoto;
        localStorage.setItem("User_profile", JSON.stringify(data));
      }

      const payload = {
        firstName,
        lastName,
        businessName,
        phone,
        email,
        industry: selectedJob,
        profilePhoto: uploadedPhoto,
      };

      const response = await postRequest("/profile/update", payload);
      const updatedProfile = { ...data, ...payload };
      localStorage.setItem("User_profile", JSON.stringify(updatedProfile));

      
      showToast("Profile updated successfully", "success");
      navigate("/dashboard/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
      showToast("Profile update failed", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePhoto = async () => {
    try {
      await deleteRequest("/profile/delete-photo");
      setProfilePhoto("");
      const updatedData = { ...data, profilePhoto: "" };
      localStorage.setItem("User_profile", JSON.stringify(updatedData));
      showToast("Photo deleted successfully", "success");
    } catch (error) {
      console.error("Error deleting photo:", error);
      showToast("Error deleting photo", "error");
    }
  };

  return (
    <div className="flex flex-col items-center mb-[60px]  gap-[27px]">
      {profilePhoto ? (
        <img
          className="w-[90px] mt-[30px] h-[90px] rounded-full object-cover"
          src={
            profilePhoto.startsWith("blob:")
              ? profilePhoto
              : `${import.meta.env.VITE_API_FOR_IMAGE}${profilePhoto}`
          }
          alt=""
        />
      ) : (
        <img
          className="w-[90px] mt-[30px] h-[90px] rounded-full"
          src={Images.defaultimage}
          alt=""
        />
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="flex gap-[20px] text-[13px] cursor-pointer">
        <span onClick={handleUploadClick} className="text-[#00B2FF]">
          Upload
        </span>
        <span onClick={handleDeletePhoto} className="!text-[#FF231C]">
          Delete
        </span>
      </div>

      <Input
        label="Business Name "
        type="text"
        value={businessName}
        placeholder="ABC Technologies"
        onchange={setBusinessName}
        size="lg"
        error=""
      />
      <div className="flex gap-[20px]">
        <Input
          label="First Name "
          value={firstName}
          onchange={setFirstName}
          type="text"
          placeholder="Maxwell"
          size="smd"
          error=""
        />
        <Input
          label="Last name "
          type="text"
          value={lastName}
          onchange={setLastName}
          placeholder="Johnson"
          size="smd"
          error=""
        />
      </div>
      <Input
        label="Phone Number "
        type="text"
        value={phone}
        onchange={setPhone}
        placeholder="+1234567889000 "
        size="lg"
        error=""
      />
      <Input
        label="Email "
        type="text"
        value={email}
        onchange={setEmail}
        placeholder="wehaveyouremail@gmail.com"
        size="lg"
        error=""
      />
      <Select
        config={jobs}
        value={selectedJob}
        onChange={setSelectedJob}
        size="lg"
        placeholder="Type to search"
        error={errors.selectedJob}
      />
      <div className="flex items-center mt-[20px] justify-between w-[570px]  ">
        <Button
          size="sm"
          variant="primary"
          className="self-end mb-5 text-[#ffffff] rounded-[7px]"
          to={"/dashboard/profile"}
        >
          Back
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="self-end mb-5 text-[#ffffff] rounded-[7px]"
          onClick={handleSubmitProfile}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </Button>
      </div>
    </div>
  );
}

export default UpdateProfile;
