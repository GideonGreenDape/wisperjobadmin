import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/ui/loader";

function GoogleCallback() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const token = urlParams.get("token");
    const email = urlParams.get("email");
    const role = urlParams.get("role");

    if (!token) {
      navigate("/signin");
      return;
    }

    
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify({ email, role }));

   
    axios
      .get(`${import.meta.env.VITE_API_URL}/profile/basic`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // Profile exists → save it
        localStorage.setItem("User_profile", JSON.stringify(res.data));
        navigate("/dashboard");
      })
      .catch((err) => {
        if (err.response?.status === 404) {
          
          navigate("/profile");
        } else {
          navigate("/signin");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return null;
}

export default GoogleCallback;
