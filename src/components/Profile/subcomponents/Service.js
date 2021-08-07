import Icon from "./../../UI Elements/Icon.js";
import Connect from "./Connect";

const Service = ({ icon, serviceName, description }) => {
  return (
    <div>
      <Icon src={icon} />
      <h3>{serviceName}</h3>
      <p>{description}</p>
      <Connect />
    </div>
  );
};

export default Service;
