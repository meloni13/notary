import { create } from "ipfs-http-client";
import { Buffer } from "buffer";

export const uploadFile = (file, upload, account) => {

  console.log(file);
  const fileName = file.name;
  const fileType = file.type;
  window.Buffer = Buffer;

  const IPFS = create("/ip4/127.0.0.1/tcp/5001");
  console.log("Submitting file to IPFS...");
  const reader = new window.FileReader();
  reader.readAsArrayBuffer(file);

  reader.onloadend = async () => {
    const buff = window.Buffer(reader.result);
    const result = await IPFS.add(buff);
    //console.log(result)
    // setLoading(true)  //Set state to loading
    if (file.type === "") {
      //Assign value for the file without extension
      file.type = "none";
    }
    console.log(result);
    upload(result.path, result.size, fileType, fileName, fileName)
      .send({ from: account })
      .on("transactionHash", (hash) => {
        //setLoading(false)
        //window.location.reload()
        alert("File Uploaded " + result.path);
        // const userid = sessionStorage.getItem("userid");
      })
      .on("error", (e) => {
        window.alert("Error", e);
        // setLoading(false)
      });
  };
};

const captureFile = (File) => {
  const file = File;
  const reader = new window.FileReader();

  reader.readAsArrayBuffer(file);
  reader.onloadend = () => {
    console.log(Buffer(reader.result));
    //console.log('buffer', this.state.buffer)
  };
};
