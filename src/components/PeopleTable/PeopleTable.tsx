/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { TableHeader } from './components/TableHeader';
import { PeopleList } from './components/PeopleList';
import { useSearchParams } from 'react-router-dom';
import { loadPeopleListFromDB, updatePeopleList } from './utils/service';
import { PeoplePageContext } from '../../context/context';

export const PeopleTable: React.FC = () => {
  const contextData = useContext(PeoplePageContext);
  const [searchParams] = useSearchParams();

  useEffect(() => loadPeopleListFromDB(contextData), []);
  useEffect(() => {
    if (contextData.context.fullList.length) {
      updatePeopleList(contextData, searchParams);
    }
  }, [searchParams]);

  const {
    context: { listToShow, error },
  } = contextData;

  if (!listToShow.length || error) {
    return null
  }

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <TableHeader />
      <PeopleList list={listToShow} />
    </table>
  );
};
