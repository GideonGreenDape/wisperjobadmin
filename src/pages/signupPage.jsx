import Images from "../assets/images";
import PasswordChecklist from "../components/forms/passwordchecklist";
import Button from "../components/ui/button";
import Input from "../components/ui/Input";
import SocialLogin from "../components/socials/socialLogin";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postRequest } from "../http/request";
import { useToast } from "../components/Toast/ToastContext";

function Signup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();

  const validateFields = () => {
    const newErrors = {};

    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (!confirmPassword) newErrors.confirmPassword = "Please confirm password";
    if (password && confirmPassword && password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!phone) newErrors.phone = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (!validateFields()) return;

    try {
      setLoading(true);
      const payload = { email, password, phone, role: "trainer" };
      const response = await postRequest("/auth/signup", payload);
      localStorage.setItem("authToken", response.token);

      if (response?.token) {
        showToast("Signup successful!", "success");
        navigate("/track");
      } else {
        showToast(
          response?.message || "Signup failed. Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error("Signup error:", error);

      const msg =
        error?.message || error?.msg || "Signup failed. Please try again.";

      showToast(msg, "error");
      navigate("/track");

      if (error?.status === 401 || error?.status === 403) {
        localStorage.removeItem("authToken");
        navigate("/signin");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" ">
      <div className="flex items-start h-screen mt-[20px] bg-[#000000] justify-center pt-[25px] gap-[100px] ">
        <div className="flex flex-col justify-center items-start ">
          <div className="w-[355px] flex justify-between items-center ">
            <h3 className=" font-bold text-[14px] text-[#ffffff]">SignUp</h3>
            <Link
              to={"/signin"}
              className=" !text-[#168DE1] no-underline font-bold font-medium text-[14px]"
            >
              Login
            </Link>
          </div>

          <div className="flex flex-col mt-[19px] gap-[15px] ">
            <Input
              label="Email"
              type="email"
              placeholder="youraddress@gmail.com "
              size="md"
              onchange={setEmail}
              error={errors.email}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              onchange={setPassword}
              size="md"
              error={errors.password}
            />
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password "
              onchange={setConfirmPassword}
              size="md"
              error={errors.confirmPassword}
            />
            <Input
              label="Phone Number"
              placeholder="Enter your phone number"
              type="text"
              onchange={setphone}
              size="md"
              error={errors.phone}
            />

            <PasswordChecklist password={password} />

            <Button
              size="lg"
              variant="secondary"
              className="text-[#ffffff] rounded-[7px]"
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </Button>

            <div className="flex justify-center ">
              <SocialLogin />
            </div>

            <p className="self-center text-[12px] !text-[#8c8c8c] font-light text-center w-[250px] ">
              By signing up, I agree to the wisper Terms & conditions and
              Privacy policy
            </p>
          </div>
        </div>

        <div className="w-[420px] mt-[5px] ">
          <img
            className="w-full h-full object-fit"
            src={Images.signupImage}
            alt="signup"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
