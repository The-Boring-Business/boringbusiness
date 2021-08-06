import Icon from "./../../UI Elements/Icon";

const MenuItem = ({ icon, title, isActive }) => {

  if (isActive === "True") {

    return (
      <div className="btn-primary  dashboard-menu-item-active">
        <Icon src={icon} height="35px" /> &nbsp;&nbsp;&nbsp;
        <p>{title}</p>
      </div>
    );

  } else {

    return (
      <div className="btn-primary dashboard-menu-item">
        <Icon src={icon} height="35px" /> &nbsp;&nbsp;&nbsp;
        <p>{title}</p>
      </div>
    );
    
  }
};

export default MenuItem;
