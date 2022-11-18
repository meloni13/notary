import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";
import uploadImage from "./fileuploadbg.png";

const WhatGPT3 = (props) => {
  const userid = sessionStorage.getItem("userid");
  const [files, setFiles] = useState([]);
  const fetchFiles = async () => {
    const res = await axios
      .get("http://localhost:3001/api/getFiles/" + userid)
      .catch((err) => {
        console.log(err);
      });

    setFiles(res.data);
  };

  useEffect(() => {
    console.log(files);
  }, [files]);

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="Your Documents" text="" />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Your Uploaded Documets</h1>
        <p>Access your Own Uploaded Documents which are yet to be</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        {files.map((file) => (
          <a href={file.fileData} target="_blank">
            <div className="cardFile">
              <img src={uploadImage}></img>
              <h3>{file.name}</h3>
            </div>
          </a>
        ))}
        {/* <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        /> */}
      </div>
    </div>
  );
};

export default WhatGPT3;
