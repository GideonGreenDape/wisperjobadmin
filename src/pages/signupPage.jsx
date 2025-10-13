import Images from "../assets/images";
import PasswordChecklist from "../components/forms/passwordchecklist";
import Button from "../components/ui/button";
import Input from "../components/ui/Input";
import SocialLogin from "../components/socials/socialLogin";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
      <div className="pl-[20px] pt-[20px] ">
        <div className="flex items-start  bg-[#000000] justify-end pt-[25px] gap-[140px] ">
      <div className="flex flex-col justify-center items-start ">
        <div className="w-[355px] flex justify-between items-center ">
          <p className=" font-bold text-[16px] text-[#ffffff]">SignUp</p>
          <Link to={'/signin'} className="text-[#168DE1] font-bold font-medium text-[14px]">Login</Link>
        </div>
        <div className="flex flex-col mt-[19px] gap-[15px] ">
          <Input
            label="Email"
            type="email"
            placeholder="youraddress@gmail.com "
            size="md"
            onchange={setEmail}
            error=""
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            onchange={setPassword}
            size="md"
            error=""
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password "
            onchange={setConfirmPassword}
            size="md"
            error=""
          />
          <Input
            label="Phone Number"
            placeholder="Enter your phone number"
            type="text"
            onchange={setPhoneNumber}
            size="md"
            error=""
          />

          <PasswordChecklist password={password} />

          <Button
            size="lg"
            variant="secondary"
            className="text-[#ffffff] rounded-[7px] "
            to={'/signin'}
          >
            {" "}
            Sign Up{" "}
          </Button>

          <div className="flex justify-center ">
            <SocialLogin />
          </div>

           <p className="self-center text-[12px] text-[#8c8c8c] font-light text-center w-[250px] ">
                By signing up, i agree to the wisper 
                Terms & conditions and Privacy policy
            </p>
          
        </div>
      </div>

      <div className="w-[480px] mt-[25px] ">
        <img
          className="w-full h-full object-contain"
          src={Images.signupImage}
          alt="signup"
        />
      </div>
    </div>
      </div>
  );
}

export default Signup;
