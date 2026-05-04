import { ArrowDown, ArrowUp, Users } from 'lucide-react';

const UserOverviewCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between ">
          <div>
            <h3 className="text-gray-500 font-medium">Total Users</h3>
            <p className="text-2xl font-bold text-gray-900 py-1">2,543</p>
            <div className="flex items-center mt-2 text-green-600 text-sm">
              <ArrowUp className="w-4 h-4" />
              <span className="ml-1">10.2% Up from last month</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-[#daeaff] flex items-center justify-center">
            <Users className="w-5 h-5 text-blue-500"/>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between">
          <div>
            <h3 className="text-gray-500 font-medium">Active Users</h3>
            <p className="text-2xl font-bold text-gray-900 py-1">1,890</p>
            <div className="flex items-center mt-2 text-green-600 text-sm">
              <ArrowUp className="w-4 h-4" />
              <span className="ml-1">5.4% Up from last month</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
            <Users className="w-5 h-5 text-green-600" />
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between">
          <div>
            <h3 className="text-gray-500 font-medium">Inactive Users</h3>
            <p className="text-2xl font-bold text-gray-900 py-1">653</p>
            <div className="flex items-center mt-2 text-red-600 text-sm">
              <ArrowDown className="w-4 h-4" />
              <span className="ml-1">2.1% Down vs last month</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
            <Users className="w-5 h-5 text-yellow-600" />
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between">
          <div>
            <h3 className="text-gray-500 font-medium">Total Scans</h3>
            <p className="text-2xl font-bold text-gray-900 py-1">12,456</p>
            <div className="flex items-center mt-2 text-green-600 text-sm">
              <ArrowUp className="w-4 h-4" />
              <span className="ml-1">15.3% Up from last month</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
            <Users className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>
    </div>
    );
};

export default UserOverviewCard;