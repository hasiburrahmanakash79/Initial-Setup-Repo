const books = [
  {
    rank: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    status: "CAUTION",
    scans: 1247,
  },
  {
    rank: 2,
    title: "The Hunger Games",
    status: "CONCERN",
    scans: 1089,
  },
  {
    rank: 3,
    title: "Charlotte's Web",
    status: "SAFE",
    scans: 987,
  },
  {
    rank: 4,
    title: "Where the Wild Things Are",
    status: "SAFE",
    scans: 876,
  },
  {
    rank: 5,
    title: "The Giving Tree",
    status: "SAFE",
    scans: 734,
  },
];

const statusStyles = {
  SAFE: "text-green-600 bg-green-100",
  CAUTION: "text-yellow-600 bg-yellow-100",
  CONCERN: "text-red-500 bg-red-100",
};

const StatusBadge = ({ status }) => (
  <span
    className={`text-xs font-semibold px-2 py-0.5 rounded ${statusStyles[status] || "text-gray-500 bg-gray-100"}`}
  >
    {status}
  </span>
);

export default function TopScannedBooks() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 w-full  mb-5">
      <h2 className="text-base font-semibold text-gray-900 mb-4">Top Scanned Books</h2>
      <div className="space-y-3">
        {books.map((book) => (
          <div
            key={book.rank}
            className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transform duration-300 rounded-xl px-4 py-4"
          >
            <div className="flex items-center gap-4">
              {/* Rank badge */}
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-blue-600">{book.rank}</span>
              </div>
              {/* Title + status */}
              <div>
                <p className="text-sm font-semibold text-gray-900">{book.title}</p>
                <div className="mt-1">
                  <StatusBadge status={book.status} />
                </div>
              </div>
            </div>
            {/* Scans count */}
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">
                {book.scans.toLocaleString()}
              </p>
              <p className="text-xs text-gray-400">scans</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}