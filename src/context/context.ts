import React from "react";
import { ContextDataType } from "./types";

const contextDefaultValue: ContextDataType = {
  context: {
    fullList: [],
    listToShow: [],
    error: null,
    isLoading: true,
  },
  setContextData: () => {},
};

export const PeoplePageContext = React.createContext(contextDefaultValue);