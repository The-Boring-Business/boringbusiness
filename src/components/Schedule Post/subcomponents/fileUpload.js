import { useState } from "react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [baseImage, setBaseImage] = useState("");
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = async (event) => {
    setSelectedFile(event.target.files[0]);
	const file = event.target.files[0]
    setIsFilePicked(true);
    const base64 = await convertFileToBase64(file);
    
    setBaseImage(base64);
	console.log(base64);
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
	  reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmission = () => {
	  //// make post request
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={(e) => {
          changeHandler(e);
        }}
      />
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
};
export default FileUpload;
