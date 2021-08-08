import {useState} from "react";
const axios = require("axios");

const Register = () => {

  const initialFormData = {
    username: "",
    password: "",
    email:"",
    confirm_password: "",
  };
  const [formData, updateFormData] = useState(initialFormData);
  const handleChange = (e) => {
    updateFormData({
        ...formData,        
        [e.target.name]: e.target.value.trim()
      });
  };

  const handleSubmit = (e) => {
      if (formData.username === "" || formData.password === "" || formData.email === ""|| formData.password !== formData.confirm_password) return
      e.preventDefault();
      axios.post("https://boringbusiness.azurewebsites.net/api/register",{'username':formData.username,'password':formData.password,'email':formData.email})
      .then(function(response) {
          localStorage.setItem("username", formData.username);
          console.log(response)
      })
      .catch(function(error) {
          console.log(error)
      })
  }
  
  return (
    <form>
      <label>
        Username:
        <input name="username" type="text" placeholder="Username" onChange={handleChange} />
      </label>
      <label>
        Email:
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
      </label>
      <label>
        Password
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      </label>
      <label>
        Confirm Password
        <input
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>Register</button>
    </form>
  );
};

export default Register;
