const Connect = ({ isConnect }) => {
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
