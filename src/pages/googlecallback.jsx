import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/ui/loader";

function GoogleCallback() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      axios
        .post(`${import.meta.env.VITE_API_URL}/auth/google/callback`, { code })
        .then((res) => {
          const { token, user } = res.data;

          localStorage.setItem("authToken", token);
        //   localStorage.setItem("user", JSON.stringify(user));

          navigate("/dashboard");
        })
        .catch(() => navigate("/login"))
        .finally(() => setLoading(false));
    }
  }, []);

  if (loading) return <Loader />;

  return null;
}

export default GoogleCallback;
