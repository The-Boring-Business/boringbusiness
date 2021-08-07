import Icon from "./../../UI Elements/Icon";
import checkActive from "./../../../style/Icons/SchedulePost/check_active.svg";
import checkUnactive from "./../../../style/Icons/SchedulePost/check_unactive.svg";

const PostToggle = () => {
  return (
    <div className="post-toggle">
      <p>Where to Post</p>
      <div className="post-toggle-btn-container">
        <button className="btn-primary post-toggle-btn">
          <Icon src={checkActive} height="40px" />
          Instagram
        </button>
        <button className="btn-primary post-toggle-btn">
          <Icon src={checkUnactive} height="40px" />
          Twitter
        </button>
      </div>
    </div>
  );
};

export default PostToggle;
