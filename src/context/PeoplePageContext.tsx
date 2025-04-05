import React, { ReactNode, useState } from 'react';
import { ContextDataValues } from './types';
import { PeoplePageContext } from './context';

interface ContextProps {
  children: ReactNode;
}

export const PeoplePageContextComponent: React.FC<ContextProps> = ({ children }) => {
  const [contextData, setContextData] = useState<ContextDataValues>({
    fullList: [],
    listToShow: [],
    error: null,
    isLoading: true,
  });

  return (
    <PeoplePageContext.Provider value={{ context: { ...contextData }, setContextData }}>
      {children}
    </PeoplePageContext.Provider>
  );
};
