import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
// import Icon from './components/UI Elements/Icon'
import LogIn from "./components/Landing Page/subcomponents/LogIn";
import FileUpload from "./components/Schedule Post/subcomponents/FileUpload";
import Dashboard from "./components/Dashboard/Dashboard";

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById("root")
);
