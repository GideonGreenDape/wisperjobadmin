import AccountSetup from "../components/layout/accountSetup";
import Header from "../components/layout/Header";
import Input from "../components/ui/Input";
import Select from "../components/forms/select";
import { useState } from "react";
import { jobs } from "../config/dropdowns";
import Button from "../components/ui/button";

function ProfilePage() {
  const [businessName, setbusinessName] = useState(null);
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [phoneNumber, setphoneNumber] = useState(null);
  const [email, setemail] = useState(null);
  const [selectedJob, setSelectedJob] = useState("");

  return (
    <>
      <Header />
      <div className="flex gap-[40px] mt-[40px]  justify-center ">
        <AccountSetup />
        <div className="flex  flex-col gap-[20px] mt-[10px] ">
          <p className="text-[12px] ">
            <span className="font-normal text-[12px] !text-[#168DE1] ">
              {" "}
              {"Account setup >"}{" "}
            </span>{" "}
            Complete Profile{" "}
          </p>
          <div className="bg-[#000000] flex flex-col rounded-[15px] px-[35px] py-[35px] ">
            <Input
              label="Business Name "
              type="text"
              placeholder="Business name"
              size="lg"
              onchange={setbusinessName}
              error=""
              className="mb-[14px] "
            />
            <div className="flex items-center gap-[19px] ">
              <Input
                label="First Name "
                type="text"
                placeholder="E.g John "
                size="smd"
                onchange={setbusinessName}
                error=""
                className="mb-[14px] "
              />
              <Input
                label="Last Name "
                type="text"
                placeholder="E.g Doe "
                size="smd"
                onchange={setlastName}
                error=""
                className="mb-[14px] "
              />
            </div>
            <Input
              label="Phone Number "
              type="text"
              placeholder="+1234567889000 "
              size="lg"
              onchange={setphoneNumber}
              error=""
              className="mb-[14px] "
            />

            <Input
              label="Email "
              type="text"
              placeholder="Wehaveyouremail@gmail.com "
              size="lg"
              onchange={setemail}
              error=""
              className="mb-[14px] text-[#ffffff] "
            />
            <Select
              config={jobs}
              value={selectedJob}
              onChange={setSelectedJob}
              size="lg"
              placeholder="Type to search"
            />

            <Button
              size="sm"
              variant="secondary"
              className="mt-[20px] self-end mb-5 text-[#ffffff] rounded-[7px] "
              to={'/otpConfirm'}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
