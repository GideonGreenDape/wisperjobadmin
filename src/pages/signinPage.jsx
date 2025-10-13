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
    <div className="fixed top-[64px] right-[0px] gap-[45px] flex items-start bg-[#000000] h-screen w-[1365px]">
       <div>
        <img
          className="w-[560px] w-[689px] h-full "
          src={Images.signinImage}
          alt="sign in image"
        />
      </div>
      <div className="w-[689px] gap-[20px] mt-[40px] flex flex-col justify-center items-start ">
        <div className="w-[350px] flex justify-between items-center ">
          <p className="font-bold text-[16px] text-[#ffffff]">SignUp</p>
          <p className="text-[#168DE1] font-medium text-[16px]">Login</p>
        </div>
        <div className=" ">
          <Input
            label="Email"
            type="email"
            placeholder="youraddress@gmail.com "
            size="md"
            onchange={setEmail}
            error=""
            className="mb-[24px] "
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            onchange={setPassword}
            size="md"
            error=""
            className="mb-[24px] "
          />

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
             <p className="text-[14px] text-center text-[#8c8c8c] font-light mt-[30px] w-[300px] ">
                By signing up, i agree to the wisper 
                Terms & conditions and Privacy policy
            </p>
          </div>
          
        </div>
      </div>

    
    </div>
  );
}

export default SignIn;
