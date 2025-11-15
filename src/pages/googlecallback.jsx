import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/ui/loader";

function GoogleCallback() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const token = params.get("token");
    const email = params.get("email");
    const role = params.get("role");

    if (token) {
      // save login token
      localStorage.setItem("authToken", token);

      
      // localStorage.setItem("user", JSON.stringify({ email, role }));

      navigate("/dashboard");
    } else {
      navigate("/signin");
    }

    setLoading(false);
  }, []);

  if (loading) return <Loader />;

  return null;
}

export default GoogleCallback;
