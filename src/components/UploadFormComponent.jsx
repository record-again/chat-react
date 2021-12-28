import React from "react";
import { useRecoilValue } from "recoil";
import { uploadbox } from "../store";

const UploadFormComponent = () => {
  const uploadform = useRecoilValue(uploadbox);

  return (
    <div
      className={`position-absolute card shadow modal-box ${
        uploadform ? "visible" : "invisible"
      }`}
    >
      <div className="card-header mb-5">
        <h4>Upload Form</h4>
      </div>
      <div className="card-body text-primary">
        <input type="file" name="attachment" />
      </div>
    </div>
  );
};

export default UploadFormComponent;
