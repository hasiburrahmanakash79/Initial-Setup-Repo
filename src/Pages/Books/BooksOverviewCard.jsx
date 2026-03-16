import { BookOpen } from "lucide-react";

const BooksOverviewCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between ">
          <h3 className="text-gray-500 font-medium">Total Scans</h3>
          <div className="w-10 h-10 rounded-lg bg-[#daeaff] flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-blue-500"/>
          </div>
        </div>
        <p className="text-2xl font-bold text-gray-900">10,293</p>
      </div>
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between">
          <h3 className="text-gray-500 font-medium">Safe Scans</h3>
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-green-600" />
          </div>
        </div>
        <p className="text-2xl font-bold text-gray-900">1,689</p>
      </div>
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between">
          <h3 className="text-gray-500 font-medium">Caution</h3>
          <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-yellow-600" />
          </div>
        </div>
        <p className="text-2xl font-bold text-gray-900">890</p>
      </div>
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between">
          <h3 className="text-gray-500 font-medium">Concern</h3>
          <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-red-500" />
          </div>
        </div>
        <p className="text-2xl font-bold text-gray-900">890</p>
      </div>
    </div>
  );
};

export default BooksOverviewCard;
