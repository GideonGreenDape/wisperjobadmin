import Images from "../assets/images";
import Button from "../components/ui/button";
import Input from "../components/ui/Input";
import SocialLogin from "../components/socials/socialLogin";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postRequest } from "../http/request";
import { useToast } from "../components/Toast/ToastContext"; 

function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast(); 
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!email || !password) {
      showToast("Email and password are required", "error");
      return;
    }

    try {
      setLoading(true);
      const payload = { email, password };
      const response = await postRequest("/auth/signin", payload);
      localStorage.setItem("authToken", response.token);

      if (response?.success || response?.status === 200) {
        showToast("Sign in successful!", "success");
        navigate("/track");
      } else {
        showToast(response?.message || "Invalid email or password.", "error");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      showToast(
        error?.message || "An error occurred while signing in.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gap-[65px] flex items-start bg-[#000000] ml-[20px] w-full">
      <div>
        <img
          className="w-[540px] h-screen object-contain"
          src={Images.signinImage}
          alt="sign in image"
        />
      </div>

      <div className="w-[640px] gap-[20px] mt-[80px] flex flex-col justify-center items-start">
        <div className="w-[350px] mb-[20px] flex justify-between items-center">
          <Link
            to={"/signup"}
            className="!text-[#168DE1] no-underline font-bold font-medium text-[14px]"
          >
            Sign Up
          </Link>
        </div>

        <div>
          <Input
            label="Email"
            type="email"
            placeholder="youraddress@gmail.com"
            size="md"
            onchange={setEmail}
            error=""
            className="mb-[14px]"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            onchange={setPassword}
            size="md"
            error=""
            className="mb-[14px]"
          />

          <Button
            size="lg"
            variant="secondary"
            className="mt-[20px] mb-5 text-[#ffffff] rounded-[7px]"
            onClick={handleSignIn}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>

          <div className="flex justify-center mt-[15px]">
            <SocialLogin />
          </div>

          <div className="flex justify-center mt-[15px]">
            <p className="text-[12px] text-center !text-[#8c8c8c] font-light w-[300px]">
              By signing in, I agree to the Wisper Terms & Conditions and
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
