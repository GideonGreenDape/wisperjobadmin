// routes.jsx or main.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";

import Jobs from "./pages/Dashboard/Jobs/index.jsx";
import JobDetails from "./pages/Dashboard/Jobs/jobDetails.jsx";
import JobEdit from "./pages/Dashboard/Jobs/jobEdit.jsx";
import JobHome from "./pages/Dashboard/Jobs/jobHome.jsx";

import Courses from "./pages/Dashboard/courses/index.jsx";
import CourseHome from "./pages/Dashboard/courses/courseHome.jsx";
import CourseCreate from "./pages/Dashboard/courses/courseCreate.jsx";

import Wallet from "./pages/Dashboard/wallet/index.jsx";

import DashboardHome from "./pages/Dashboard/dashboardHome.jsx";

import Profile from "./pages/Dashboard/profile/index.jsx";
import EditProfile from "./pages/Dashboard/profile/editProfile.jsx";
import UpdateProfile from "./pages/Dashboard/profile/updateProfile.jsx";

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
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/otpConfirm",
    element: (
      <ProtectedRoute>
        <OtpPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profileupload",
    element: (
      <ProtectedRoute>
        <ProfileUploadPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "jobs",
        element: <Jobs />,
        children: [
          {
            index: true,
            element: <JobHome />,
          },
          {
            path: "create-job",
            element: <JobEdit />,
          },
          {
            path: ":id",
            element: <JobDetails />,
          },
        ],
      },
      {
        path: "courses",
        element: <Courses />,
        children: [
          {
            index: true,
            element: <CourseHome />,
          },
          {
            path: "create-course",
            element: <CourseCreate />
          }
        ],
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "profile",
        element: <Profile />,
         children: [
          {
            index: true,
            element: <EditProfile />,
          },
          {
            path: 'edit-profile',
            element: <UpdateProfile />
          }
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
