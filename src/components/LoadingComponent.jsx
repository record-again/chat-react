import React from "react";

const LoadingComponent = () => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <h2 className="card-title mb-4">Loading...</h2>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
