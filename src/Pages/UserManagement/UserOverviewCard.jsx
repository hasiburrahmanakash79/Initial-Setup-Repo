import { ArrowDown, ArrowUp, Calendar, Crown, Users } from "lucide-react";

const UserOverviewCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between">
          <div>
            <h3 className="text-gray-500 font-medium">Total Users</h3>
            <p className="text-2xl font-bold py-1 text-gray-900">10,293</p>
            <div className="flex items-center mt-2 text-green-600 text-sm">
              <ArrowUp className="w-4 h-4" />
              <span className="ml-1">12.3% Up from last month</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
            <Users  className="w-5 h-5 text-blue-600"/>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between">
          <div>
            <h3 className="text-gray-500 font-medium">Premium Users</h3>
            <p className="text-2xl py-1 font-bold text-gray-900">1,689</p>
            <div className="flex items-center mt-2 text-green-600 text-sm">
              <ArrowUp className="w-4 h-4" />
              <span className="ml-1">8.5% Up from last month</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
            <Crown className="w-5 h-5 text-yellow-600" />
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between"> 
            <div>

          <h3 className="text-gray-500 font-medium">New This Week</h3>
        <p className="text-2xl py-1 font-bold text-gray-900">890</p>
        <div className="flex items-center mt-2 text-red-600 text-sm">
          <ArrowDown className="w-4 h-4" />
          <span className="ml-1">4.3% Down vs last month</span>
        </div>
            </div>
          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOverviewCard;
