import SectionTitle from "../../components/SectionTitle";
import UserList from "./UserList";
import UserOverviewCard from "./UserOverviewCard";

const UserManagement = () => {
  return (
    <div>
      <SectionTitle
        title={"Users Management"}
        description={"Manage book database and ratings"}
      />
      <div className="px-6 space-y-6">
        <UserOverviewCard />
        <UserList/>
      </div>
    </div>
  );
};

export default UserManagement;
