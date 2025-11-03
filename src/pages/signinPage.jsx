import Images from "../assets/images";
import Button from "../components/ui/button";
import Input from "../components/ui/Input";
import SocialLogin from "../components/socials/socialLogin";
import { useState } from "react";
import {Link} from 'react-router-dom'

function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
 

  return (
    <div className=" gap-[65px] flex items-start bg-[#000000] ml-[20px]  w-full">
       <div>
        <img
          className="w-[540px]  h-screen object-contain"
          src={Images.signinImage}
          alt="sign in image"
        />
      </div>
      <div className="w-[640px] gap-[20px] mt-[80px] flex flex-col justify-center items-start ">
        <div className="w-[350px] mb-[20px] flex justify-between items-center ">
         <Link to={'/signup'} className=" !text-[#168DE1] no-underline font-bold font-medium text-[14px]">Sign Up</Link>
          {/* <Link to={''} className="text-[#168DE1] font-medium text-[14px]">Login</Link> */}
        </div>
        <div className=" ">
          <Input
            label="Email"
            type="email"
            placeholder="youraddress@gmail.com "
            size="md"
            onchange={setEmail}
            error=""
            className="mb-[14px] "
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            onchange={setPassword}
            size="md"
            error=""
            className="mb-[14px] "
          />

          <Button
            size="lg"
            variant="secondary"
            className="mt-[20px] mb-5 text-[#ffffff] rounded-[7px] "
            to='/track'
          >
            {" "}
            Sign In{" "}
          </Button>

          <div className="flex justify-center mt-[15px] ">
            <SocialLogin />
          </div>

          <div className="flex justify-center mt-[15px] ">
             <p className="text-[12px] text-center !text-[#8c8c8c] font-light mt-[] w-[300px] ">
                By signing in, i agree to the wisper 
                Terms & conditions and Privacy policy
            </p>
          </div>
          
        </div>
      </div>

    
    </div>
  );
}

export default SignIn;
