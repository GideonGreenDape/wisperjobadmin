import SocialLogin from "../components/socials/socialLogin";
import OnboardingScreen from "../components/layout/onboarding/setupScreen";
import Button from "../components/ui/button";

function Onboarding() {
  return (
    <div className=" h-screen flex flex-col bg-black overflow-y-hidden items-center justify-center ">
      <div className="w-[520px] h-[600px] flex flex-col items-center justify-center  rounded-[40px] bg-[#151515] border-[1px] border-[#2C2C2C] ">
        <div className="flex flex-col w-[138px] mt-[-25px]  items-center justify-center leading-none ">
           <p className="font-urbanist font-bold text-[18px] text-[#168DE1] m-0 p-0">
            Wisper
          </p>
          <p className=" font-urbanist font-bold text-[22px] text-[#ffffff] m-0 p-0 -mt-[2px] ">
            Welcome
          </p>
          </div>
        <div className="flex flex-col items-center gap-[8px] ">
          <OnboardingScreen />
          <SocialLogin />
          <div className="flex items-center gap-[9px] mt-[12px]  " >
            <Button
              variant="primary"
              className="font-urbanist rounded-[12px] font-urbanist  "
              to={'/signin'}
            >
              Login
              </Button>
            <Button
              className="font-urbanist font-medium font-urbanist rounded-[12px] "
              variant="secondary"
              to={'/signup'}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Onboarding;
