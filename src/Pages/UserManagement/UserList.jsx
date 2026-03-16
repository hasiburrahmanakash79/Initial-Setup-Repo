import { Search, Trash2, Mail, MapPin, Calendar, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const servicesData = [
  {
    cover: "https://picsum.photos/id/1015/64/90",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    label: "CAUTION",
  },
  {
    cover: "https://picsum.photos/id/1015/64/90",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    label: "CONCERN",
  },
  {
    cover: "https://picsum.photos/id/1015/64/90",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    label: "SAFE",
  },
  {
    cover: "https://picsum.photos/id/1015/64/90",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    label: "CONCERN",
  },
  {
    cover: "https://picsum.photos/id/1015/64/90",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    label: "CAUTION",
  },
];

const users = [
  {
    id: 1,
    name: "Danial Smith",
    email: "danial@gmail.com",
    join_date: "6 Jan, 2025",
    subscriptions: "Premium",
    scans: 34,
    status: true,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Overland Park, KS",
    services: servicesData,
  },
  {
    id: 2,
    name: "Lisa Brown",
    email: "lisa.brown@example.com",
    join_date: "3 Mar, 2026",
    subscriptions: "Free",
    scans: 27,
    status: true,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "New York, NY",
    services: servicesData,
  },
  {
    id: 3,
    name: "John Doe",
    email: "john.doe@gmail.com",
    join_date: "12 Dec, 2024",
    subscriptions: "Premium",
    scans: 89,
    status: false,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    location: "Austin, TX",
    services: servicesData,
  },
  {
    id: 4,
    name: "Sarah Miller",
    email: "sarah.miller@outlook.com",
    join_date: "22 Apr, 2025",
    subscriptions: "Free",
    scans: 15,
    status: true,
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    location: "Seattle, WA",
    services: servicesData,
  },
  {
    id: 5,
    name: "Michael Chen",
    email: "mchen@yahoo.com",
    join_date: "5 Jul, 2025",
    subscriptions: "Premium",
    scans: 62,
    status: true,
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    location: "Chicago, IL",
    services: servicesData,
  },
  {
    id: 6,
    name: "Olivia Rodriguez",
    email: "olivia.r@gmail.com",
    join_date: "18 Sep, 2025",
    subscriptions: "Free",
    scans: 8,
    status: true,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    location: "Miami, FL",
    services: servicesData,
  },
];

const subscriptionsStyles = {
  Premium: "text-blue-600 bg-blue-100",
  Free: "text-yellow-600 bg-yellow-100",
};

const SubscriptionsBadge = ({ subscriptions }) => (
  <span
    className={`text-xs font-semibold px-3 py-1 rounded-full ${subscriptionsStyles[subscriptions] || "text-gray-500 bg-gray-100"}`}
  >
    {subscriptions}
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

const filterOptions = ["All", "Premium", "Free"];

export default function UserList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userList, setUserList] = useState(users);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
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
      user.join_date.includes(search);
    const matchFilter = filter === "All" || user.subscriptions === filter;
    return matchSearch && matchFilter;
  });

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setShowDetailModal(true);
  };

  const openDeleteModal = (user, e) => {
    e.stopPropagation();
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      setUserList((prev) => prev.filter((b) => b.id !== userToDelete.id));
    }
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  return (
    <div className=" mb-6">
      {/* Search + Filter Row */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2">
            <Search className="w-4 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search by name, email, or join_date..."
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
                Subscriptions
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
                  className={`hover:bg-gray-50 transition-colors cursor-pointer ${
                    idx !== filtered.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                  onClick={() => handleRowClick(user)}
                >
                  {/* user */}
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

                  {/* join_date */}
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-nowrap">
                    {user.join_date}
                  </td>
                  {/* Scans */}
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {user.scans.toLocaleString()}
                  </td>
                  {/* subscriptions */}
                  <td className="px-4 py-4">
                    <SubscriptionsBadge subscriptions={user.subscriptions} />
                  </td>

                  {/* status */}
                  <td className="px-4 py-4 text-sm font-semibold text-green-600">
                    {user.status ? "Active" : "Inactive"}
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Confirm Delete</h3>
            <p className="text-gray-600 mb-8">
              Are you sure you want to delete{" "}
              <span className="font-medium">{userToDelete.name}</span>? This action cannot be undone.
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

      {/* DETAIL MODAL (EXACTLY LIKE THE IMAGE) */}
      {showDetailModal && selectedUser && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[70] p-4">
          <div className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            {/* Close Button */}
            <div className="flex justify-end p-2">
              <button
                onClick={() => {
                  setShowDetailModal(false);
                  setSelectedUser(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* LEFT: PROFILE (exact match to image) */}
              <div className="p-6 bg-base-200">
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-md">
                    <img
                      src={selectedUser.avatar}
                      alt={selectedUser.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-center my-4 text-gray-900">
                  {selectedUser.name}
                </h2>

                <div className="mt-4 space-y-2 text-sm">
                  {/* Email */}
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-700">{selectedUser.email}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-700">{selectedUser.location}</span>
                  </div>

                  {/* Join Date */}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-700">{selectedUser.join_date}</span>
                  </div>
                </div>
              </div>

              {/* RIGHT: SERVICE PROVIDED (exact match to image) */}
              <div className="flex-1 px-6 mb-6 overflow-y-auto">
                <h3 className="font-semibold text-lg mb-6 text-gray-900">Service provided</h3>

                <div className="space-y-3 h-[400px] overflow-y-auto">
                  {selectedUser.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 pb-2 border-b border-gray-100 last:border-none last:pb-0"
                    >
                      {/* Book Cover */}
                      <div className="flex-shrink-0 w-10 h-12 overflow-hidden rounded shadow">
                        <img
                          src={service.cover}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Book Info */}
                      <div className="flex-1">
                        <p className="text-sm font-semibold">
                          {service.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">{service.author}</p>
                      </div>

                      {/* Status Badge (exact colors from image) */}
                      <span
                        className={`px-3 mr-5 py-1 text-xs font-semibold rounded-full ${
                          service.label === "CAUTION"
                            ? "bg-yellow-100 text-yellow-700"
                            : service.label === "CONCERN"
                            ? "bg-rose-100 text-rose-600"
                            : "bg-emerald-100 text-emerald-600"
                        }`}
                      >
                        {service.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}