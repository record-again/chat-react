import React, { useState } from "react";

const HeadChatContainer = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="col-12 p-2">
      <div className="row">
        <div className="col-8">Chat App</div>
        <div
          onClick={() => setHidden(!hidden)}
          className="col-4 text-end head-menu"
        >
          <i className="bi bi-grid-3x3-gap-fill"></i>
          <ul className={`list-group ${hidden ? "invisible" : "visible"}`}>
            <li className="list-group-item">Add Participant</li>
            <li className="list-group-item">Create Group</li>
            <li className="list-group-item bg-danger text-light">Log Out</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeadChatContainer;
