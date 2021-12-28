import React from "react";

const SearchComponent = () => {
  return (
    <div className="input-group p-3">
      <div className="input-group-text">
        <i className="bi bi-search"></i>
      </div>
      <input type="text" className="form-control" placeholder="Search..." />
    </div>
  );
};

export default SearchComponent;
