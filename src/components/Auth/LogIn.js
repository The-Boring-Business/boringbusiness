import {useState} from "react";
const axios = require("axios");

const LogIn = () => {
  const initialFormData = {
    username: "",
    password: "",
  };
  const [formData, updateFormData] = useState(initialFormData);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    if (formData.username === "" || formData.password === "") return;
    e.preventDefault();
    axios
      .post("https://boringbusiness.azurewebsites.net/api/login", {
        username: formData.username,
        password: formData.password,
      })
      .then(function (response) {
        localStorage.setItem("username", formData.username);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form>
      <label>
        Username:
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </label>
      <button type="submit"  onClick={handleSubmit}>Log In</button>
    </form>
  );
};

export default LogIn;
