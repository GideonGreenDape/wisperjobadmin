function AccountSetup() {
  return (
    <div className="flex flex-col text-white h-fit rounded-[24px] py-[20px] px-[30px] bg-[#000000] w-[300px]">
      <h5 className=" text-[16px] font-semibold mb-[6px] ">Account Set Up</h5>
      <hr className="h-[0.8px] !bg-[#AEAEAE]/40 border-0 w-full m-0 mb-[10px]" />


      <div className="flex flex-col gap-[15px] ">
        <div className="flex flex-col gap-[3px] mt-[9px] " >
          <p className="text-[13px] font-medium">Complete Profile</p>
          <p className="text-[12px] !text-[#AEAEAE]">
            Tell us a bit more so we can personalise your experience
          </p>
        </div>

        <div className="flex flex-col gap-[3px] " >
          <p className="text-[13px] font-medium ">Verify Email</p>
          <p className="text-[12px] !text-[#AEAEAE]">
            Secure your account with email verification
          </p>
        </div>

        <div className="flex flex-col gap-[3px] ">
          <p className="text-[13px] font-medium">Add Profile Picture</p>
          <p className="text-[12px] !text-[#AEAEAE]">
            Upload your picture for easy recognition
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountSetup;
