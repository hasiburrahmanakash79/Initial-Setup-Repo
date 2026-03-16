import SectionTitle from "../../components/SectionTitle";
import TransactionList from "./TransactionList";
import TransactionOverview from "./TransactionOverview";

const Transaction = () => {
  return (
    <div>
      <SectionTitle
        title={"Subscription"}
        description={"Manage book database and ratings"}
      />
      <div className="px-6 space-y-6">
        <TransactionOverview />
        <TransactionList />
      </div>
    </div>
  );
};

export default Transaction;
