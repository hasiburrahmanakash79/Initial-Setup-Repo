import { Search, Trash2 } from "lucide-react";
import { useState } from "react";

const transactions = [
  {
    id: 1,
    name: "Emma Johnson",
    email: "emma.johnson@gmail.com",
    Join_date: "15 Jan, 2025",
    total_scans: 145,
    last_scans: "10 Mar, 2026",
    method: "Stripe",
  },
  {
    id: 2,
    name: "Michael Lee",
    email: "michael.lee@yahoo.com",
    Join_date: "22 Feb, 2025",
    total_scans: 89,
    last_scans: "05 Apr, 2026",
    method: "PayPal",
  },
  {
    id: 3,
    name: "Sophia Garcia",
    email: "sophia.garcia@proton.me",
    Join_date: "08 Mar, 2025",
    total_scans: 234,
    last_scans: "12 Feb, 2026",
    method: "Visa",
  },
  {
    id: 4,
    name: "James Patel",
    email: "james.patel@outlook.com",
    Join_date: "19 Apr, 2025",
    total_scans: 67,
    last_scans: "28 Mar, 2026",
    method: "Apple Pay",
  },
  {
    id: 5,
    name: "Olivia Chen",
    email: "olivia.chen@gmail.com",
    Join_date: "03 May, 2025",
    total_scans: 312,
    last_scans: "14 Mar, 2026",
    method: "Stripe",
  },
  {
    id: 6,
    name: "Liam Rodriguez",
    email: "liam.r@icloud.com",
    Join_date: "27 Jun, 2025",
    total_scans: 54,
    last_scans: "01 Mar, 2026",
    method: "Mastercard",
  },
  {
    id: 7,
    name: "Isabella Kim",
    email: "isabella.kim@protonmail.com",
    Join_date: "11 Jul, 2025",
    total_scans: 178,
    last_scans: "15 Mar, 2026",
    method: "PayPal",
  },
];

export default function TransactionList() {
  const [search, setSearch] = useState("");
  const [transactionList, setTransactionList] = useState(transactions);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState(null);

  const filtered = transactionList.filter((tx) => {
    const matchSearch =
      tx.name.toLowerCase().includes(search.toLowerCase()) ||
      tx.email.toLowerCase().includes(search.toLowerCase()) ||
      tx.Join_date.includes(search);
    return matchSearch;
  });

  const openDeleteModal = (tx, e) => {
    e.stopPropagation();
    setTransactionToDelete(tx);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (transactionToDelete) {
      setTransactionList((prev) =>
        prev.filter((t) => t.id !== transactionToDelete.id)
      );
    }
    setShowDeleteModal(false);
    setTransactionToDelete(null);
  };

  return (
    <div className="mb-6">
      {/* Search Row */}
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
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-100 bg-base-200">
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3 w-1/4">
                User
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-3">
                Join Date
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-3">
                Total Scans
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-3">
                Last Scan
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-3">
                Payment Method
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-3">
                Action
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
                  No transactions found.
                </td>
              </tr>
            ) : (
              filtered.map((tx, idx) => (
                <tr
                  key={tx.id}
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
                        {tx.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {tx.email}
                      </p>
                    </div>
                  </td>

                  {/* Join Date */}
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-nowrap">
                    {tx.Join_date}
                  </td>

                  {/* Total Scans */}
                  <td className="px-4 py-4 text-sm text-gray-700 font-medium">
                    {tx.total_scans.toLocaleString()}
                  </td>

                  {/* Last Scan */}
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-nowrap">
                    {tx.last_scans}
                  </td>

                  {/* Payment Method */}
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">
                      {tx.method}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-4">
                    <button
                      onClick={(e) => openDeleteModal(tx, e)}
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
      {showDeleteModal && transactionToDelete && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[70]">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Confirm Delete
            </h3>
            <p className="text-gray-600 mb-8">
              Are you sure you want to delete the transaction for{" "}
              <span className="font-medium">{transactionToDelete.name}</span>?
              This action cannot be undone.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setTransactionToDelete(null);
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