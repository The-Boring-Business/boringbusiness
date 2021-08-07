import Icon from "./../../UI Elements/Icon.js";
import Connect from "./Connect";

const Service = ({ icon, serviceName, description, isConnect }) => {
  return (
    <div className="profile-service-component">
      <Icon src={icon} height="80px" />
      <h3>{serviceName}</h3>
      <p>{description}</p>
      <Connect isConnect={isConnect} />
    </div>
  );
};

export default Service;
