import Icon from "./../../UI Elements/Icon";
import logOut from "./../../../style/Icons/Dashboard/log-out.svg";

const LogOut = () => {
  return (
    <button className="btn-primary dashboard-log-out">
      <Icon src={logOut} height="20px" /> &nbsp; &nbsp; &nbsp;
      <p>Log Out</p>
    </button>
  );
};

export default LogOut;
