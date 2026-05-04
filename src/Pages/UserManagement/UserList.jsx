import { Search, Trash2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const users = [
  {
    id: 1,
    name: "Emma Johnson",
    email: "emma.johnson@gmail.com",
    joinDate: "15 Jan, 2025",
    totalScans: 145,
    lastActivity: "10 Mar, 2026",
    status: "Active",
  },
  {
    id: 2,
    name: "Michael Lee",
    email: "michael.lee@yahoo.com",
    joinDate: "22 Feb, 2025",
    totalScans: 89,
    lastActivity: "05 Apr, 2026",
    status: "Active",
  },
  {
    id: 3,
    name: "Sophia Garcia",
    email: "sophia.garcia@proton.me",
    joinDate: "08 Mar, 2025",
    totalScans: 234,
    lastActivity: "12 Feb, 2026",
    status: "Inactive",
  },
  {
    id: 4,
    name: "James Patel",
    email: "james.patel@outlook.com",
    joinDate: "19 Apr, 2025",
    totalScans: 67,
    lastActivity: "28 Mar, 2026",
    status: "Active",
  },
  {
    id: 5,
    name: "Olivia Chen",
    email: "olivia.chen@gmail.com",
    joinDate: "03 May, 2025",
    totalScans: 312,
    lastActivity: "14 Mar, 2026",
    status: "Active",
  },
  {
    id: 6,
    name: "Liam Rodriguez",
    email: "liam.r@icloud.com",
    joinDate: "27 Jun, 2025",
    totalScans: 54,
    lastActivity: "01 Mar, 2026",
    status: "Inactive",
  },
  {
    id: 7,
    name: "Isabella Kim",
    email: "isabella.kim@protonmail.com",
    joinDate: "11 Jul, 2025",
    totalScans: 178,
    lastActivity: "15 Mar, 2026",
    status: "Active",
  },
];

const statusStyles = {
  Active: "text-green-600 bg-green-100",
  Inactive: "text-yellow-600 bg-yellow-100",
};

const StatusBadge = ({ status }) => (
  <span
    className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[status] || "text-gray-500 bg-gray-100"}`}
  >
    {status}
  </span>
);

const ChevronIcon = ({ open }) => (
  <svg
    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const filterOptions = ["All", "Active", "Inactive"];

export default function UserList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userList, setUserList] = useState(users);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = userList.filter((user) => {
    const matchSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.joinDate.includes(search);
    const matchFilter = filter === "All" || user.status === filter;
    return matchSearch && matchFilter;
  });

  const openDeleteModal = (user, e) => {
    e.stopPropagation();
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      setUserList((prev) =>
        prev.filter((u) => u.id !== userToDelete.id)
      );
    }
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  return (
    <div className="pb-6">
      {/* Search + Filter Row */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2">
            <Search className="w-4 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search by name, email, or join date..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-500 placeholder-gray-400 outline-none"
          />
        </div>

        {/* Filter Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm min-w-[70px] justify-between"
          >
            <ChevronIcon open={dropdownOpen} />
            <span className="font-medium">{filter}</span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setFilter(opt);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                    filter === opt
                      ? "font-semibold bg-[#EFF6FF] text-[#0C4E96]"
                      : "text-gray-700"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-100 bg-base-200">
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3 w-2/5">
                User
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-3">
                Join Date
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-3">
                Total Scans
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-3">
                Last Activity
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-3">
                Status
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-16 text-gray-400 text-sm"
                >
                  No users found.
                </td>
              </tr>
            ) : (
              filtered.map((user, idx) => (
                <tr
                  key={user.id}
                  className={`hover:bg-gray-50 transition-colors ${
                    idx !== filtered.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  {/* User */}
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {user.email}
                      </p>
                    </div>
                  </td>

                  {/* Join Date */}
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-nowrap">
                    {user.joinDate}
                  </td>

                  {/* Total Scans */}
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {user.totalScans.toLocaleString()}
                  </td>

                  {/* Last Activity */}
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-nowrap">
                    {user.lastActivity}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-4">
                    <StatusBadge status={user.status} />
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-4">
                    <button
                      onClick={(e) => openDeleteModal(user, e)}
                      className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      {showDeleteModal && userToDelete && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[70]">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Confirm Delete
            </h3>
            <p className="text-gray-600 mb-8">
              Are you sure you want to delete the user{" "}
              <span className="font-medium">{userToDelete.name}</span>?
              This action cannot be undone.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setUserToDelete(null);
                }}
                className="flex-1 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}