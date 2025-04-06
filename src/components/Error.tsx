import { useContext } from 'react';
import { Loader } from './Loader';
import { PeoplePageContext } from '../context/context';

export const Error = () => {
  const {
    context: { isLoading, error },
  } = useContext(PeoplePageContext);

  if (!error && !isLoading) {
    return null;
  }

  return (
    <div className="column">
      <div className="box table-container">
        {isLoading && <Loader />}

        {error === 'unloaded' && (
          <p data-cy="peopleLoadingError">Something went wrong</p>
        )}

        {error === 'empty' && (
          <p data-cy="noPeopleMessage">There are no people on the server</p>
        )}

        {error === 'wrongsearch' && (
          <p>There are no people matching the current search criteria</p>
        )}
      </div>
    </div>
  );
};
