import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
// import Icon from './components/UI Elements/Icon'
import Twitter from'./components/Analytics/subcomponents/Twitter'
import LogIn from "./components/Landing Page/subcomponents/LogIn";
import FileUpload from "./components/Schedule Post/subcomponents/FileUpload";
import TopGreeting from "./components/UI Elements/TopGreeting"

ReactDOM.render(
  <React.StrictMode>
    <TopGreeting />
    <Twitter />
  </React.StrictMode>,
  document.getElementById("root")
);
