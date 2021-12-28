import React from "react";
import MessageComponent from "../components/MessageComponent";

const MessageContainer = () => {
  return (
    <div className="container messages-panel bg-warning p-2">
      <MessageComponent bg="success" align="start" />
      <MessageComponent bg="primary" align="end" />
      <MessageComponent bg="primary" align="end" />
      <MessageComponent bg="success" align="start" />
      <MessageComponent bg="success" align="start" />
      <MessageComponent bg="primary" align="end" />
      <MessageComponent bg="success" align="start" />
      <MessageComponent bg="primary" align="end" />
      <MessageComponent bg="primary" align="end" />
      <MessageComponent bg="primary" align="end" />
      <MessageComponent bg="primary" align="end" />
    </div>
  );
};

export default MessageContainer;
