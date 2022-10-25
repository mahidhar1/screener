import React from "react";

const PageNotFound = ({ error, resetErrorBoundary, componentStack }) => {
  return (
    <div className="error-page">
      <div className="dialog">
        <h1>The page you are looking for does not exist.</h1>
        <p>You may have mistyped the address or the page may have moved.</p>
        <p>
          If you are the application owner check the logs for more information.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
