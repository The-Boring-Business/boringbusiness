import { useState, useEffect } from "react";
const qs = require('query-string');
const axios = require("axios");

const Twitter = (props) => {  

  const [token, setToken] = useState("");
  const [location, setLocation] = useState(window.location.href);

  useEffect(() => {
    getToken()
    setLocation(window.location.href)
    queryWithParams()
  },[])

  const getToken = () => {
    axios
      .get("https://boringbusiness.azurewebsites.net/request_token")
      .then(function (response) {
        // handle success
        console.log(response.data.oauth_token);
        setToken(response.data.oauth_token);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  
  
  const queryWithParams = () =>{ 
    const parsed = qs.parse(location);
    const verifier = parsed.oauth_verifier;
    const urlToken = parsed["http://localhost:3000/?oauth_token"]
    console.log(verifier,urlToken);
    axios
    .get(
      "https://boringbusiness.azurewebsites.net/access_token?oauth_token=" +
        urlToken +
        "&oauth_verifier=" +verifier
    )
    .then(function (response) {
      console.log(response.data);
      localStorage.setItem("token_id", response.data["access_token_id"]);
      localStorage.setItem("token_key", response.data["access_token_key"]);
      localStorage.setItem("token_name", response.data["access_token_name"]);
      localStorage.setItem("token_secret", response.data["access_token_secret"]);      
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  

  return (
    <div>
      <button className="btn-primary profile-connect-btn profile-disconnect">
        <a href={`https://api.twitter.com/oauth/authenticate?oauth_token=${token}`}>Connect</a>
      </button>
    </div>
  );
};

export default Twitter;
