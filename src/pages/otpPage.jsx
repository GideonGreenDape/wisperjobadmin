import AccountSetup from "../components/layout/accountSetup";
import Header from "../components/layout/Header";
import { useState, useEffect } from "react";
import OTPInput from "../components/ui/otpInput";
import Button from "../components/ui/button";
import Icons from "../assets/icons";
import { postRequest } from "../http/request";
import StatusToast from "../components/ui/StatusToast"; 

function OtpPage() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); 

  
  useEffect(() => {
    const sendOtp = async () => {
      try {
        setLoading(true);
        await postRequest("/otp/send");
        setToast({ message: "OTP sent to your email", type: "success" });
      } catch (err) {
        setToast({ message: err?.message || "Failed to send OTP", type: "error" });
      } finally {
        setLoading(false);
      }
    };
    sendOtp();
  }, []);

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleVerify = async () => {
    if (otp.length < 6) {
      setToast({ message: "Please enter complete OTP", type: "error" });
      return;
    }

    try {
      setLoading(true);
      await postRequest("/otp/verify", { code: otp });
      setToast({ message: "OTP verified successfully", type: "success" });
      setTimeout(() => (window.location.href = "/profileupload"), 1500);
    } catch (err) {
      setToast({ message: err?.message || "Invalid OTP", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex gap-[40px] mt-[40px] justify-center">
        <AccountSetup />
        <div className="flex flex-col gap-[20px] mt-[10px] relative">

          
          {toast && (
            <StatusToast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast(null)}
            />
          )}

          <p className="text-[12px]">
            <span className="font-normal text-[12px] !text-[#168DE1]">
              Account setup {"> "}
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
                Please enter the OTP sent to your email
              </p>
              <OTPInput length={6} onChange={handleOtpChange} />

              <div className="flex flex-col mt-[40px] items-center gap-[13px]">
                <p className="text-[13px]">
                  Didn't get code?{" "}
                  <span
                    className="text-[13px] !text-[#168DE1] cursor-pointer"
                    onClick={() => window.location.reload()}
                  >
                    Resend
                  </span>
                </p>
                <p className="text-[13px]">
                  Wrong email address?{" "}
                  <span className="text-[13px] !text-[#168DE1]">Change Email</span>
                </p>
              </div>

              <Button
                size="sm"
                variant="secondary"
                disabled={loading}
                className={`mt-[20px] self-center mb-5 text-[#ffffff] rounded-[7px] ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
                onClick={handleVerify}
              >
                {loading ? "Verifying..." : "Verify Email"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtpPage;
