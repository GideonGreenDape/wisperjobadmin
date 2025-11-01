// routes.jsx or main.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index.jsx";

// import Jobs from "./pages/dashboard/jobs/index.jsx";
// import Courses from "./pages/dashboard/Courses/index.jsx";
// import Wallet from "./pages/Dashboard/wallet/index.jsx";

import DashboardHome from "./pages/Dashboard/dashboardHome.jsx";

// import Profile from "./pages/dashboard/profile/index.jsx";


import Onboarding from "./pages/onboardingPage.jsx";
import Signup from "./pages/signupPage.jsx";
import SignIn from "./pages/signinPage.jsx";
import TrackPage from "./pages/trackPage.jsx";
import ProfilePage from "./pages/profileSetupPage.jsx";
import OtpPage from "./pages/otpPage.jsx";
import ProfileUploadPage from "./pages/profileUpload.jsx";

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
      // {
      //   path: "jobs",
      //   element: <Jobs />,
      // },
      // {
      //   path: "courses",
      //   element: <Courses />,
      // },
      // {
      //   path: "wallet",
      //   element: <Wallet />,
      // },
      // {
      //   path: "profile",
      //   element: <Profile />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
