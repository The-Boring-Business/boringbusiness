import {useState} from "react";
import Twitter from "../../Analytics/subcomponents/Twitter"
const Connect = ({ isConnect,serviceName }) => {  

  
  if (serviceName==="Twitter") {
    return(
      <Twitter/>
    )
  }

  if (isConnect === "True") {
    return (
      <button className="btn-primary profile-connect-btn profile-disconnect">
        <p>Disconnect</p>
      </button>
    );
  } else {
    return (
      <button className="btn-primary profile-connect-btn">
        <p>Connect</p>
      </button>
    );
  }
};
export default Connect;
