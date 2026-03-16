import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Mar 5", totalScans: 1500, uniqueUsers: 2250 },
  { date: "Mar 6", totalScans: 1650, uniqueUsers: 2400 },
  { date: "Mar 7", totalScans: 1420, uniqueUsers: 2200 },
  { date: "Mar 8", totalScans: 1800, uniqueUsers: 2900 },
  { date: "Mar 9", totalScans: 1600, uniqueUsers: 2350 },
  { date: "Mar 10", totalScans: 1750, uniqueUsers: 2500 },
  { date: "Mar 11", totalScans: 2200, uniqueUsers: 3000 },
];

const CustomLegend = () => (
  <div className="flex items-center justify-center gap-6 mt-3">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
      <span className="text-xs text-gray-500">Total Scans</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
      <span className="text-xs text-gray-500">Unique Users</span>
    </div>
  </div>
);

export default function ScanActivityChart() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 w-full">
      <h2 className="text-base font-semibold text-gray-900 mb-4">
        Scan Activity (Last 7 Days)
      </h2>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" vertical={true} />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            ticks={[0, 750, 1500, 2250, 3000]}
            domain={[0, 3000]}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              fontSize: "12px",
            }}
          />
          <Line
            type="monotone"
            dataKey="totalScans"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4, fill: "#fff", stroke: "#3b82f6", strokeWidth: 2 }}
            activeDot={{ r: 5 }}
            name="Total Scans"
          />
          <Line
            type="monotone"
            dataKey="uniqueUsers"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ r: 4, fill: "#fff", stroke: "#22c55e", strokeWidth: 2 }}
            activeDot={{ r: 5 }}
            name="Unique Users"
          />
        </LineChart>
      </ResponsiveContainer>
      <CustomLegend />
    </div>
  );
}