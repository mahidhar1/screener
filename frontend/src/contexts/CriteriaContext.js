import React, { createContext, useContext, useState, useEffect } from "react";
import { getData } from "../api";

const CriteriaContext = createContext();

const useCriteriaContext = () => {
  const context = useContext(CriteriaContext);
  if (context === undefined) {
    throw new Error("Criteria Context not defined");
  }
  return context;
};

const CriteriaContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [criteriaList, setCriteriaList] = useState([]);
  const [selectedCriteria, setSelectedCriteria] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getData().then((res) => {
      console.log(" in context");
      setCriteriaList(
        res?.data.map((obj) => ({
          ...obj,
          link: createLinkFromName(obj.name).link,
        })) || [],
      );
      setIsLoading(false);
    });
  }, []);

  const criteriaListState = {
    isLoading,
    criteriaList,
    selectedCriteria,
    setSelectedCriteria,
  };

  return (
    <CriteriaContext.Provider value={criteriaListState}>
      {props.children}
    </CriteriaContext.Provider>
  );
};

const createLinkFromName = (name) => {
  let arrayOfWords = name?.match(/\w+/g);
  arrayOfWords = arrayOfWords.map((word) => word.toLowerCase());
  return {
    link:
      "/page/" +
      arrayOfWords[0] +
      (arrayOfWords[1] ? `_${arrayOfWords[1]}` : ""),
  };
};

export { CriteriaContextProvider, useCriteriaContext, CriteriaContext };
