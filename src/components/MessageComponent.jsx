import React from "react";

const MessageComponent = (props) => {
  return (
    <div className={`col-12 mb-3 text-${props.align}`}>
      <div className={`message rounded bg-${props.bg} text-light p-2`}>
        Message text this
      </div>
    </div>
  );
};

export default MessageComponent;
