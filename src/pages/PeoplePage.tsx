import { PeopleFilters } from "../components/PeopleFilters/PeopleFilters";
import { PeoplePageContextComponent } from "../context/PeoplePageContext";
import { Error } from "../components/Error";
import { PeopleTable } from "../components/PeopleTable/PeopleTable";

export const PeoplePage = () => {
  return (
    <PeoplePageContextComponent>
      <h1 className="title">People Page</h1>

      <div className="block">
        <div className="columns is-desktop is-flex-direction-row-reverse">
          <PeopleFilters />
          <Error />
          <PeopleTable />
        </div>
      </div>
    </PeoplePageContextComponent>
  );
};
