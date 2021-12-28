import React from "react";
import SearchComponent from "../components/SearchComponent";
import ChatTypeComponent from "../components/ChatTypeComponent";
import PeopleListContainer from "./PeopleListContainer";
import HeadChatContainer from "./HeadChatContainer";
import MessageContainer from "./MessageContainer";
import UploadFormComponent from "../components/UploadFormComponent";

const ChatContainer = () => {
  return (
    <div>
      <div className="row g-0">
        <div className="col-3 bg-light">
          <SearchComponent />
          <PeopleListContainer />
        </div>
        <div className="col-9 bg-light">
          <HeadChatContainer />
          <MessageContainer />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-3 bg-light p-2">
          <h6>Status: Online</h6>
        </div>
        <div className="col-9 bg-light p-2">
          <ChatTypeComponent />
        </div>
      </div>
      <UploadFormComponent />
    </div>
  );
};

export default ChatContainer;
