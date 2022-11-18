import { useState, useEffect } from "react";
// import { storage } from "../../firebase";
// import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import "./OverlayModular.css";
import axios from "axios";
import { useRef } from "react";
const OverlayModular = (props) => {
  const [fileUpload, setFileUploader] = useState(null);
  const [fileList, setFileList] = useState([]);
  const fileName = useRef("");

  const ctx = useContext(AuthContext);

  const formHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("fileData", fileUpload);
    formData.append("user", sessionStorage.getItem("userid"));
    formData.append("fileName", fileName.current.value);
    axios
      .post("http://localhost:3001/api/uploadFile", formData, {})
      .then((res) => {
        // console.log("Hello");
        console.log(res);
      });
    props.fileHandler();
  };

  const submitFile = () => {};

  return (
    <div className="background">
      <div className="overlay">
        <form onSubmit={(event) => formHandler(event)}>
          <label>Name</label>
          <input type="text" ref={fileName}></input>
          <input
            type="file"
            onChange={(event) => {
              setFileUploader(event.target.files[0]);
            }}
            className="file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 
            hover:file:bg-violet-100"
          ></input>

          <button type="submit" onClick={submitFile}>
            Upload File
          </button>
          {/* {fileList.map((url) => {
          return <a href={url}>Documents</a>;
        })} */}
        </form>
        <button onClick={ctx.noOverlay}>Okay</button>
      </div>
    </div>
  );
};

export default OverlayModular;
