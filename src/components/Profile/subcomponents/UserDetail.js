import Icon from './../../UI Elements/Icon';

const UserDetail = ({icon, detail}) => {
    return (
      <div className="profile-user-details">
          <Icon src={icon} />
          <p>{detail}</p>
      </div>
    );
  };
  
  export default UserDetail;
  