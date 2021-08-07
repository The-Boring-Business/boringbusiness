import UserDetail from "./subcomponents/UserDetail";
import mail from "./../../style/Icons/Profile/mail.svg";
import label from "./../../style/Icons/Profile/Lable.svg";
import clock from "./../../style/Icons/Profile/clock.svg";

const User = ({ name, picture, username, niche, dob }) => {
  return (
    <div className="component profile-user">
      <img src={picture} alt={name} />
      <div className="profile-user-detail-container">
        <h1>{name}</h1>
        <div>
          <UserDetail icon={mail} detail={username} />
          <UserDetail icon={label} detail={niche} />
          <UserDetail icon={clock} detail={dob} />
        </div>
      </div>
    </div>
  );
};

export default User;
