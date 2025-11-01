import AccountSetup from "../components/layout/accountSetup";
import Header from "../components/layout/Header";
import { useState, useEffect } from "react";
import OTPInput from "../components/ui/otpInput";
import Button from "../components/ui/button";
import Icons from "../assets/icons";

function OtpPage() {
  const [businessName, setbusinessName] = useState(null);
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [phoneNumber, setphoneNumber] = useState(null);
  const [email, setemail] = useState(null);
  const [selectedJob, setSelectedJob] = useState("");

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleOtpChange = (value) => {
    console.log("OTP entered:", value);
  };

  return (
    <>
      <Header />
      <div className="flex gap-[40px] mt-[40px] justify-center">
        <AccountSetup />
        <div className="flex flex-col gap-[20px] mt-[10px] relative">
          {/* Modal */}
          {showModal && (
            <div className="flex items-center align-start gap-[5px]  absolute !text-[12px] pr-[55px] pl-[10px] py-[5px] top-[60px] left-1/2 transform -translate-x-1/2 !bg-[#168DE1] text-white px-6 py-3 rounded-[5px] shadow-lg z-50">
                <Icons.CircleCheck className="inline-block mr-2" size={14} />
              OTP sent
            </div>
          )}

          <p className="text-[12px]">
            <span className="font-normal text-[12px] !text-[#168DE1]">
              {"Account setup > "}
            </span>
            Verify Email
          </p>

          <div className="bg-[#000000] flex gap-[115px] items-center rounded-[18px] px-[55px] py-[55px]">
            <div className="self-end w-[30px] h-[30px]">
              <img
                className="w-[34px] h-[34px] cursor-pointer"
                src={Icons.backarrow}
                alt="backward icon"
              />
            </div>

            <div className="flex flex-col gap-[25px] mr-[170px] items-center">
              <h2>Verify Your Email Address</h2>
              <p className="text-[13px] w-[310px] !text-[#D1D1D1] text-center">
                Please enter the OTP sent to contac@chowdeck.com to verify your email
              </p>
              <OTPInput length={6} onChange={handleOtpChange} />

              <div className="flex flex-col mt-[40px] items-center gap-[13px]">
                <p className="text-[13px]">
                  Didn't get code?{" "}
                  <span className="text-[13px] !text-[#168DE1]">Resend</span>
                </p>
                <p className="text-[13px]">
                  Wrong email address?{" "}
                  <span className="text-[13px] !text-[#168DE1]">Change Email</span>
                </p>
              </div>

              <Button
                size="sm"
                variant="secondary"
                className="mt-[20px] self-center mb-5 text-[#ffffff] rounded-[7px]"
                to={'/profileupload'}
              >
                Verify Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtpPage;
