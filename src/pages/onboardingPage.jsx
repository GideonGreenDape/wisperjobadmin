import SocialLogin from "../components/socials/socialLogin";
import OnboardingScreen from "../components/layout/onboarding/setupScreen";
import Button from "../components/ui/button";

function Onboarding() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-y-hidden items-center justify-center ">
      <div className="w-[829px] h-[829px] flex flex-col items-center justify-center  rounded-[40px] bg-[#151515] border-[1px] border-[#2C2C2C] ">
        <div className="flex flex-col w-[138px] mt-[-25px] font-bold items-center justify-center leading-none ">
           <p className="font-Urbanist font-bold text-[28px] text-[#168DE1] m-0 p-0">
            Wisper
          </p>
          <p className="font-[Urbanist] font-bold text-[36px] text-[#ffffff] m-0 p-0 -mt-[2px]">
            Welcome
          </p>
          </div>
        <div className="flex flex-col items-center gap-[20px] ">
          <OnboardingScreen />
          <SocialLogin />
          <div className="flex items-center gap-[9px] mt-[12px]  " >
            <Button
              variant="primary"
              className="font-Urbanist rounded-[12px] font-Urbanist  "
              to={'/signup'}
            >
              Login
              </Button>
            <Button
              className="font-Urbanist text-[16px] font-medium font-Urbanist rounded-[12px] "
              variant="secondary"
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
