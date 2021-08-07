import Icon from "../../UI Elements/Icon";
import reply from "./../../../style/Icons/Moderation/reply.svg";

const Queries = ({ profilePicture, senderName, label, message }) => {
  return (
    <div className="moderation-query">
      <img src={profilePicture} alt="Profile" />
      <div>
        <p>{senderName}</p>
        <span>{label}</span>
        <p>{message}</p>
      </div>
      <Icon src={reply} />
    </div>
  );
};

export default Queries;
