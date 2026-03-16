import { createBrowserRouter } from "react-router";
import Dashboard from "../Layouts/Dashboard";
import SignIn from "../Pages/Authentication/SignIn";
import DashboardOverview from "../Pages/DashboardOverview/DashboardOverview";
import Books from "../Pages/Books/Books";
import UserManagement from "../Pages/UserManagement/UserManagement";
import Transaction from "../Pages/Transaction/Transaction";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import ForgotPassword from "../Pages/Authentication/ForgotPassword";
import OtpVerification from "../Pages/Authentication/OtpVerification";
import ResetPassword from "../Pages/Authentication/ResetPassword";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <DashboardOverview/>
      },
      {
        path: "/books",
        element: <Books/>
      },
      {
        path: "/users-management",
        element: <UserManagement/>
      },
      {
        path: "/transaction",
        element: <Transaction/>
      },
      {
        path: "/policy",
        element: <PrivacyPolicy/>
      },

    ],
  },
  
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/forget-password",
    element: <ForgotPassword />,
  },
  {
    path: "/otp-verification",
    element: <OtpVerification />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

export default router;
