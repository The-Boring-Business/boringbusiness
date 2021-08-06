import Icon from "./../../UI Elements/Icon";

const GoogleAuth = ({ icon }) => {
  return (
    <button className="btn-primary">
      <p>Login with Google</p> &nbsp; &nbsp;
      <Icon src={icon} />
    </button>
  );
};

export default GoogleAuth;
