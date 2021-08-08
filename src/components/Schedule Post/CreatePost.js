import PostInput from "./subcomponents/PostInput";
import PostToggle from "./subcomponents/PostToggle";
import DOB from "./subcomponents/DOB";
import Icon from "./../UI Elements/Icon";
import gallery from "./../../style/Icons/SchedulePost/gallery.svg";
import wand from "./../../style/Icons/SchedulePost/wand.png";
import checkActive from "./../../style/Icons/SchedulePost/check_active.svg";
import checkUnactive from "./../../style/Icons/SchedulePost/check_unactive.svg";


const CreatePost = () => {
  const handleSubmit = (event) => {};

  return (
    <div className="component create-post">
      <form>
        <h2>Create New Post</h2>
        <div className="post-input-component">
          <p>Enter Caption</p>
          <div className="input-text">
            <input name="caption" type="text" placeholder="Post Caption" />
            <div className="post-input-icons">
              <Icon src={gallery} height="30px" />
              <Icon src={wand} height="30px" />
            </div>
          </div>
        </div>
        <div className="post-input-component">
          <p>Enter Caption</p>
          <div className="input-text">
            <input name="hashtags" type="text" placeholder="Hashtags" />
            <div className="post-input-icons">
              <Icon src={wand} height="30px" />
            </div>
          </div>
        </div>
        <div className="profile-input">
          <p style={{ fontWeight: "700" }}>Date</p>
          <div className="input-text">
            <input name="date" type="date" />
          </div>
        </div>
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
        <div class="create-post-btn-container">
          {/* <button className="btn-primary">Post Now</button> */}
          <button className="btn-primary">Save & Schedule</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
