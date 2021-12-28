import React from "react";

const PeopleComponent = () => {
  return (
    <div className="col-12 people overflow-hidden py-2 px-1">
      <img
        src="/logo192.png"
        className="rounded float-start img-thumbnail me-2"
        alt="logo"
      />
      <p>My sure name</p>
      <span className="status bg-secondary rounded-circle"></span>
    </div>
  );
};

export default PeopleComponent;
