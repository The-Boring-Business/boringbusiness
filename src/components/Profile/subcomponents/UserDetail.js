import Icon from './../../UI Elements/Icon';

const UserDetail = ({icon, detail}) => {
    return (
      <div>
          <Icon src={icon} />
          <p>{detail}</p>
      </div>
    );
  };
  
  export default UserDetail;
  