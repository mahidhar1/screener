import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import LoadingIndicator from "./components/LoadingIndicator";
import PageNotFound from "./components/PageNotFound";
import CriteriaDetails from "./pages/CriteriaDetails";
import CriteriaList from "./pages/CriteriaList";

import "./App.css";

function App() {
  const errorHandler = (error, errorInfo) => {
    console.log("error.....", error);
    console.log("errorInfo.....", errorInfo);
  };

  return (
    <div>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary, componentStack }) => (
          <PageNotFound
            error={error}
            resetErrorBoundary={resetErrorBoundary}
            componentStack={componentStack}
          />
        )}
        onError={errorHandler}
      >
        <React.Suspense fallback={<LoadingIndicator />}>
          <Routes>
            <Route exact path="/page" element={<CriteriaList />} />
            <Route
              exact
              path="/page/:criteriaName"
              element={<CriteriaDetails />}
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
