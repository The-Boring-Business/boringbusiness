import Icon from "./../../UI Elements/Icon";
import gallery from "./../../../style/Icons/SchedulePost/gallery.svg";
import wand from "./../../../style/Icons/SchedulePost/wand.png";

const PostInput = ({ title, placeholder, imageUpload, magicWand }) => {
  return (
    <div className="post-input-component">
      <p>{title}</p>
      <div className="input-text">
        <input type="text" placeholder={placeholder} />
        <div className="post-input-icons">
          {imageUpload === "True" ? <Icon src={gallery} height="30px" /> : null}
          {magicWand === "True" ? <Icon src={wand} height="30px" /> : null}
        </div>
      </div>
    </div>
  );
};

export default PostInput;
