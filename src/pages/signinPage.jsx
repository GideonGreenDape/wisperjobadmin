import Images from "../assets/images";
import PasswordChecklist from "../components/forms/passwordchecklist";
import Button from "../components/ui/button";
import Input from "../components/ui/Input";
import SocialLogin from "../components/socials/socialLogin";
import { useState } from "react";

function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
 

  return (
    <div className="fixed top-[64px] right-[0px] gap-[17px] flex items-start bg-[#000000] h-screen w-[1365px]">
      <div className="w-[689px]  flex flex-col justify-center items-start ">
        <div className="w-[559px] flex justify-between items-center ">
          <p className="font-bold text-[32px] text-[#ffffff]">SignUp</p>
          <p className="text-[#168DE1] font-medium text-[20px]">Login</p>
        </div>
        <div className=" ">
          <Input
            label="Email"
            type="email"
            placeholder="youraddress@gmail.com "
            size="lg"
            onchange={setEmail}
            error=""
            className="mb-[24px] "
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            onchange={setPassword}
            size="lg"
            error=""
            className="mb-[24px] "
          />

          <PasswordChecklist password={password} />

          <Button
            size="lg"
            variant="secondary"
            className="mt-[40px] mb-5 text-[#ffffff] rounded-[7px] "
          >
            {" "}
            Sign In{" "}
          </Button>

          <div className="flex justify-center mt-[15px] ">
            <SocialLogin />
          </div>

          <div className="flex justify-center mt-[15px] ">
             <p className="text-[14px] text-[#8c8c8c] font-light mt-[30px] w-[559px] ">
                By signing up, you agree to our Terms & conditions and Privacy policy
            </p>
          </div>
          
        </div>
      </div>

      <div>
        <img
          className="w-[689px] w-[689px] h-full "
          src={Images.signupImage}
          alt="signup"
        />
      </div>
    </div>
  );
}

export default SignIn;
