import AccountSetup from "../components/layout/accountSetup";
import Header from "../components/layout/Header";
import Input from "../components/ui/Input";
import Select from "../components/forms/select";
import { useState } from "react";
import { jobs } from "../config/dropdowns";
import Button from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../http/request";
import { useToast } from "../components/Toast/ToastContext";

function ProfilePage() {
  const [businessName, setBusinessName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();

  const validateFields = () => {
    const newErrors = {};
    if (!businessName) newErrors.businessName = "Business name required";
    if (!firstName) newErrors.firstName = "First name required";
    if (!lastName) newErrors.lastName = "Last name required";
    if (!phoneNumber) newErrors.phoneNumber = "Phone number required";
    if (!email) newErrors.email = "Email required";
    if (!selectedJob) newErrors.selectedJob = "Job selection required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveProfile = async () => {
    if (!validateFields()) return;

    try {
      setLoading(true);
      const payload = {
        businessName,
        firstName,
        lastName,
        industry: selectedJob,
        email,
        phoneNumber,
      };

      const response = await postRequest("/profile/setup", payload);
      // localStorage.setItem("authToken", response.token);
      console.log("here is the payload:", payload);

      if (response?.profile) {
        showToast("Profile saved successfully!", "success");
        navigate("/otpConfirm");
      } else {
        showToast(response?.message || "Failed to save profile.", "error");
      }
    } catch (error) {
      console.error("Profile setup error:", error);
      showToast(
        error?.message || "An error occurred while saving profile.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex gap-[40px] mt-[40px] justify-center">
        <AccountSetup />
        <div className="flex flex-col gap-[20px] mt-[10px]">
          <p className="text-[12px]">
            <span className="font-normal text-[12px] !text-[#168DE1]">
              {" "}
              {"Account setup >"}{" "}
            </span>{" "}
            Complete Profile{" "}
          </p>
          <div className="bg-[#000000] flex flex-col rounded-[15px] px-[35px] py-[35px]">
            <Input
              label="Business Name "
              type="text"
              placeholder="Business name"
              size="lg"
              onchange={setBusinessName}
              error={errors.businessName}
              className="mb-[14px]"
            />
            <div className="flex items-center gap-[19px]">
              <Input
                label="First Name "
                type="text"
                placeholder="E.g John "
                size="smd"
                onchange={setFirstName}
                error={errors.firstName}
                className="mb-[14px]"
              />
              <Input
                label="Last Name "
                type="text"
                placeholder="E.g Doe "
                size="smd"
                onchange={setLastName}
                error={errors.lastName}
                className="mb-[14px]"
              />
            </div>
            <Input
              label="Phone Number "
              type="text"
              placeholder="+1234567889000 "
              size="lg"
              onchange={setPhoneNumber}
              error={errors.phoneNumber}
              className="mb-[14px]"
            />

            <Input
              label="Email "
              type="text"
              placeholder="Wehaveyouremail@gmail.com "
              size="lg"
              onchange={setEmail}
              error={errors.email}
              className="mb-[14px] text-[#ffffff]"
            />
            <Select
              config={jobs}
              value={selectedJob}
              onChange={setSelectedJob}
              size="lg"
              placeholder="Type to search"
              error={errors.selectedJob}
            />

            <Button
              size="sm"
              variant="secondary"
              className="mt-[20px] self-end mb-5 text-[#ffffff] rounded-[7px]"
              onClick={handleSaveProfile}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
