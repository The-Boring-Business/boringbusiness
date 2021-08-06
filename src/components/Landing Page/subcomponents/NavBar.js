import GoogleAuth from "../subcomponents/GoogleAuth";
import logo from "./../../../style/Images/logo.svg";

const NavBar = () => {
  return (
    <div className="landing-page-navbar">
      <img src={logo} alt="logo" />
      <GoogleAuth />
    </div>
  );
};

export default NavBar;
