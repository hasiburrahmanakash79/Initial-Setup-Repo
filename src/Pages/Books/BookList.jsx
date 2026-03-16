import { Search, Trash2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const books = [
  {
    id: 1,
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    isbn: "9780060254926",
    rating: "SAFE",
    scans: 1059,
    cached: true,
    cover: "https://covers.openlibrary.org/b/isbn/9780060254926-M.jpg",
  },
  {
    id: 2,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    isbn: "9780439708180",
    rating: "CAUTION",
    scans: 974,
    cached: true,
    cover: "https://covers.openlibrary.org/b/isbn/9780439708180-M.jpg",
  },
  {
    id: 3,
    title: "The Giving Tree",
    author: "Shel Silverstein",
    isbn: "9780060256654",
    rating: "SAFE",
    scans: 368,
    cached: true,
    cover: "https://covers.openlibrary.org/b/isbn/9780060256654-M.jpg",
  },
  {
    id: 4,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    isbn: "9780439023528",
    rating: "CONCERN",
    scans: 652,
    cached: true,
    cover: "https://covers.openlibrary.org/b/isbn/9780439023528-M.jpg",
  },
];

const ratingStyles = {
  SAFE: "text-green-600 bg-green-100",
  CAUTION: "text-yellow-600 bg-yellow-100",
  CONCERN: "text-red-500 bg-red-100",
};

const RatingBadge = ({ rating }) => (
  <span
    className={`text-xs font-semibold px-3 py-1 rounded-full ${ratingStyles[rating] || "text-gray-500 bg-gray-100"}`}
  >
    {rating}
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

const filterOptions = ["All", "SAFE", "CAUTION", "CONCERN"];

export default function BookList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [bookList, setBookList] = useState(books);
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

  const filtered = bookList.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.isbn.includes(search);
    const matchFilter = filter === "All" || book.rating === filter;
    return matchSearch && matchFilter;
  });

  const handleDelete = (id) => {
    setBookList((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="">
      {/* Search + Filter Row */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2">
            <Search className="w-4 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search by title, author, or ISBN..."
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
                Book
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-3">
                ISBN
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-3">
                Rating
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-3">
                Scans
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-3">
                Cached
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
                  No books found.
                </td>
              </tr>
            ) : (
              filtered.map((book, idx) => (
                <tr
                  key={book.id}
                  className={`hover:bg-gray-50 transition-colors ${
                    idx !== filtered.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  {/* Book */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-10 h-12 object-cover rounded-md shadow-sm flex-shrink-0 bg-gray-100"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {book.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {book.author}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* ISBN */}
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-nowrap">
                    {book.isbn}
                  </td>

                  {/* Rating */}
                  <td className="px-4 py-4">
                    <RatingBadge rating={book.rating} />
                  </td>

                  {/* Scans */}
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {book.scans.toLocaleString()}
                  </td>

                  {/* Cached */}
                  <td className="px-4 py-4 text-sm font-semibold text-green-600">
                    {book.cached ? "Yes" : "No"}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-4">
                    <button
                      onClick={() => handleDelete(book.id)}
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
    </div>
  );
}
