import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { date: "Mar 5", uniqueUsers: 1950 },
  { date: "Mar 6", uniqueUsers: 2050 },
  { date: "Mar 7", uniqueUsers: 1850 },
  { date: "Mar 8", uniqueUsers: 2400 },
  { date: "Mar 9", uniqueUsers: 2000 },
  { date: "Mar 10", uniqueUsers: 2200 },
  { date: "Mar 11", uniqueUsers: 2600 },
];

const CustomLegend = () => (
  <div className="flex items-center justify-center gap-2 mt-3">
    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
    <span className="text-xs text-gray-500">Unique Users</span>
  </div>
);

export default function DailyScanActivity() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 w-full">
      <h2 className="text-base font-semibold text-gray-900 mb-4">
        Daily Scan Activity
      </h2>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 0 }} barCategoryGap="30%">
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
            ticks={[0, 650, 1300, 1950, 2600]}
            domain={[0, 2600]}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              fontSize: "12px",
            }}
            cursor={{ fill: "rgba(0,0,0,0.04)" }}
          />
          <Bar dataKey="uniqueUsers" name="Unique Users" radius={[3, 3, 0, 0]}>
            {data.map((_, index) => (
              <Cell key={index} fill="#f59e0b" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <CustomLegend />
    </div>
  );
}