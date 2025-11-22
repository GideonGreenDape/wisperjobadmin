import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/ui/loader";

function GoogleCallback() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const email = urlParams.get("email");
    const role = urlParams.get("role");

    if (token) {
      localStorage.setItem("authToken", token);

      
      fetch(`${import.meta.env.VITE_API_URL}/profile/basic`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(async (res) => {
          if (res.status === 500) {    
            navigate("/profile");
          } else {
            const data = await res.json();
            localStorage.setItem("User_profile", JSON.stringify(data));
            navigate("/dashboard");
          }
        })
        .catch(() => navigate("/profile"))
        .finally(() => setLoading(false));
    } else {
      navigate("/login");
      setLoading(false);
    }
  }, []);

  if (loading) return <Loader />;
  return null;
}

export default GoogleCallback;
