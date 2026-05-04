import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from '../assets/logo/logo.svg'
import {
  Users,
  Settings,
  LogOut,
  BookOpen,
  LayoutDashboard,
} from "lucide-react";
import { useState } from "react";
import { BiDollarCircle } from "react-icons/bi";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    // Show success toast
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Logged out successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/signin");
    console.log("User logged out");
  };

  const iconMappings = {
    Dashboard: LayoutDashboard,
    UserManagement: BookOpen,
    Matches: Users,
    TermsConditions: BiDollarCircle,
    Settings: Settings,
  };

  const Menus = [
    {
      title: "Dashboard",
      path: "/",
      icon: iconMappings.Dashboard,
    },
    {
      title: "Books",
      path: "/books",
      icon: iconMappings.UserManagement,
    },
    {
      title: "Users",
      path: "/users-management",
      icon: iconMappings.Matches,
    },
    {
      title: "Transaction",
      path: "/transaction",
      icon: iconMappings.TermsConditions,
    },
    {
      title: "Privacy & Policy",
      path: "/policy",
      icon: iconMappings.Settings,
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-60 h-screen bg-white fixed left-0 top-0 bottom-0 z-50 flex flex-col border-r border-gray-200">
        <div className="flex items-center justify-center gap-x-4 px-8 py-5 mt-3">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        <ul className="px-4 mt-1 space-y-3">
          {Menus.map((Menu, index) => (
            <Link
              to={Menu.path}
              key={index}
              className={`flex rounded-md py-2 px-4 cursor-pointer text-sm items-center mt-2 ${
                location.pathname === Menu.path
                  ? "bg-[#EFF6FF] text-[#0C4E96]"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <li className="flex items-center gap-x-2 text-md">
                <Menu.icon className="w-5 h-5" />
                <span className="font-medium">{Menu.title}</span>
              </li>
            </Link>
          ))}
        </ul>

        {/* Logout */}
        <div className="mt-auto px-4 pb-4">
          <button
            onClick={() => setShowLogoutModal(true)}
            className="flex bg-[#FDEFED] text-[#FD5E48] p-2 rounded-md text-sm items-center cursor-pointer w-full"
          >
            <li className="flex items-center gap-x-3 px-2 py-1 w-full">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </li>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="pl-60 flex-1 overflow-y-auto h-[100vh]">
        <Outlet />
      </div>

      {/* Custom Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-10 text-center rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex justify-center mb-3">
              <div className="bg-red-50 h-12 w-12 flex items-center justify-center text-red-400 rounded-full">
                <LogOut />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Are you sure?</h3>
            <p className="text-sm text-gray-600 mb-4">You want to logout!</p>
            <div className="flex justify-center mt-10 gap-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transform duration-300"
              >
                No, Cancel!
              </button>
              <button
                onClick={handleLogoutConfirm}
                className="px-4 py-2 bg-[#fa5252] text-white rounded-md hover:bg-[#e04742] transform duration-300"
              >
                Yes, Logout!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
