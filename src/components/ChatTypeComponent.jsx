import React from "react";
import { useRecoilState } from "recoil";
import { uploadbox } from "../store";

const ChatTypeComponent = () => {
  const [uploadform, setUploadform] = useRecoilState(uploadbox);

  const showForm = () => {
    setUploadform(!uploadform);
  };

  return (
    <div className="row chat-type no-gutter">
      <div className="col-1">
        <i
          onClick={() => showForm()}
          className="bi bi-paperclip attachment"
        ></i>
      </div>
      <div className="col-11 type-container">
        <input type="text" name="chat" placeholder="Type here..." />
        <i className="bi bi-send-fill"></i>
      </div>
    </div>
  );
};

export default ChatTypeComponent;
