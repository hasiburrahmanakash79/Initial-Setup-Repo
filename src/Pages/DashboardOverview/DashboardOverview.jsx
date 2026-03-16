import SectionTitle from "../../components/SectionTitle";
import OverviewCard from "./OverviewCard";
import ScanActivityChart from "./ScanActivityChart";
import DailyScanActivity from "./DailyScanActivity";
import TopScannedBooks from "./TopScannedBooks";

const DashboardOverview = () => {
  return (
    <div>
      <SectionTitle
        title={"Dashboard Overview"}
        description={"Monitor your QandelShield performance and analytics"}
      />
      <div
        className="px-6 space-y-6"
      >
        <OverviewCard />
        <div className="space-y-5">
        {/* Row 1: Two charts side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ScanActivityChart />
          <DailyScanActivity />
        </div>
 
        {/* Row 2: Top Scanned Books */}
        <TopScannedBooks />
      </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
