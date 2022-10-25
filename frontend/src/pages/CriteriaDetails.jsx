import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCriteriaContext } from "../contexts/CriteriaContext";
import PageNotFound from "../components/PageNotFound";

const CriteriaDetails = ({ name, tag, color, text, criteria }) => {
  const { criteriaName } = useParams();
  const { isLoading, criteriaList } = useCriteriaContext();
  const [criteriaObj, setCriteriaObj] = useState({});
  const [invalidLinkError, setInvaildLinkError] = useState(false);

  useEffect(() => {
    if (isLoading === false && criteriaName) {
      let tempList = criteriaList?.filter(
        (obj) => obj.link === `/page/${criteriaName}`,
      );
      if (tempList.length > 0) {
        setCriteriaObj(tempList[0]);
        setInvaildLinkError(false);
      } else {
        setInvaildLinkError(true);
      }
    }
  }, [isLoading, criteriaName, criteriaList]);

  if (isLoading === false && invalidLinkError) {
    return <PageNotFound />;
  }

  return (
    <div className="phone-section">
      {isLoading && <div style={{ color: "white" }}>Loading ....</div>}
      {isLoading === false && (
        <>
          <div className="header-section">
            <div style={{ color: "white" }}>{criteriaObj?.name}</div>
            <div
              className="sub-text"
              style={{ color: `${criteriaObj?.color}` }}
            >
              {criteriaObj?.tag}
            </div>
          </div>
          <div className="body-section">
            {criteriaObj?.criteria
              ?.map((obj) => {
                let text = obj.text;
                let variable = obj?.variable;
                if (variable) {
                  for (let key of Object.keys(variable)) {
                    let val = null;
                    if (variable[key].type === "indicator") {
                      val = variable[key].default_value;
                    } else if (variable[key].type === "value") {
                      val = variable[key].values[0];
                    }
                    text = text.replace(key, val);
                  }
                }
                return text;
              })
              .join(", ")}
          </div>
        </>
      )}
    </div>
  );
};

export default CriteriaDetails;
