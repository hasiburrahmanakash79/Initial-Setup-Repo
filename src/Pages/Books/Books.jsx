
import SectionTitle from "../../components/SectionTitle";
import BooksOverviewCard from "./BooksOverviewCard";
import BookList from "./BookList";

const Books = () => {
  return (
    <div>
      <SectionTitle
        title={"Books Management"}
        description={"Manage book database and ratings"}
      />
      <div className="px-6 space-y-6">
        <BooksOverviewCard />
        <div>
            <BookList/>
        </div>
      </div>
    </div>
  );
};

export default Books;
