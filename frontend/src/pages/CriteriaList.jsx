import React from "react";
import { useCriteriaContext } from "../contexts/CriteriaContext";

const CriteriaList = () => {
  const { isLoading, criteriaList } = useCriteriaContext();

  return (
    <div className="phone-section">
      {isLoading && <p style={{ color: "white" }}> Loading ...</p>}
      {isLoading === false && (
        <ul>
          {criteriaList?.map((criteriaData, i) => {
            return (
              <li>
                <a
                  href={criteriaData?.link}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  <div>{criteriaData.name}</div>
                  <div style={{ color: `${criteriaData.color}` }}>
                    {criteriaData.tag}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CriteriaList;
