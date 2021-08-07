import Icon from "./../../UI Elements/Icon";
import followerLogo from "./../../../style/Icons/Analytics/followers.svg";

const FollowerCount = ({ followerCount }) => {
  return (
    <div>
      <Icon src={followerLogo} />
      <div>
        <p>New followers</p>
        <h3>{followerCount}</h3>
      </div>
    </div>
  );
};

export default FollowerCount;
