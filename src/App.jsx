// routes.jsx or main.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index";

import Jobs from "./pages/dashboard/jobs/index";
import Courses from "./pages/dashboard/Courses/index";
import Wallet from "./pages/Dashboard/wallet/index";

import DashboardHome from "./pages/Dashboard/dashboardHome";

import Profile from "./pages/dashboard/profile/index";


import Onboarding from "./pages/onboardingPage";
import Signup from "./pages/signupPage";
import SignIn from "./pages/signinPage";
import TrackPage from "./pages/trackPage";
import ProfilePage from "./pages/profileSetupPage";
import OtpPage from "./pages/otpPage";
import ProfileUploadPage from "./pages/profileUpload";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/track",
    element: <TrackPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/otpConfirm",
    element: <OtpPage />,
  },
  {
    path: "/profileupload",
    element: <ProfileUploadPage />,
  },

  
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true, 
        element: <DashboardHome />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
