import { useState } from "react";

// const FileUpload = () => {
//   const [imageUrl, setImageUrl] = useState("");

//   const handleUploadImage = (ev) => {
//     ev.preventDefault();

//     const data = new FormData();
//     data.append("file", uploadInput.files[0]);
//     data.append("filename", fileName.value);

//     fetch("http://localhost:8000/upload", {
//       method: "POST",
//       body: data,
//     }).then((response) => {
//       response.json().then((body) => {
//         setImageUrl(`http://localhost:8000/${body.file}`);
//       });
//     });
//   };

//   return (
//     <form onSubmit={handleUploadImage}>
//       <div>
//         <input ref={useRef("uploadInput")} type="file" />
//       </div>
//       <div>
//         <input
//           ref={useRef("fileName")}
//           type="text"
//           placeholder="Enter the desired name of file"
//         />
//       </div>
//       <br />
//       <div>
//         <button>Upload</button>
//       </div>
//       <img src={imageUrl} alt="img" />
//     </form>
//   );
// };

// export default FileUpload;

import React, {useState} from 'react';

function FileUpload(){
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
	};

	return(
   <div>
			<input type="file" name="file" onChange={changeHandler} />
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
	)
}