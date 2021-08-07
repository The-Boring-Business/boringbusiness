import Icon from "../../UI Elements/Icon";
import send from "./../../../style/Icons/Moderation/send.svg";

const Reply = ({ profilePicture, senderName, label, message }) => {
  return (
    <div>
      <h2>Send a Reply</h2>
      <div>
        <img src={profilePicture} alt="profile" />
        <div>
          <p>{senderName}</p>

          <p>{message}</p>
        </div>
        <span>{label}</span>
      </div>
      <div className="input-text">
        <input type="text" />
        <button>
          <Icon src={send} />
        </button>
      </div>
    </div>
  );
};

export default Reply;
