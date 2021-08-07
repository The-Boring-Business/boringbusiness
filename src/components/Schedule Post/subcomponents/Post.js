import SocialIcon from "./SocialIcon";
import PostDetails from "./PostDetails";
import Icon from "./../../UI Elements/Icon";

import instagram from "./../../../style/Icons/SchedulePost/insta.svg";
import twitter from "./../../../style/Icons/SchedulePost/twitter.svg";
import bin from "./../../../style/Icons/SchedulePost/bin.svg";

const Post = ({ type, time, content }) => {
  return (
    <div className="post">
      {type === "Twitter" ? (
        <SocialIcon icon={twitter} />
      ) : (
        <SocialIcon icon={instagram} />
      )}
      <PostDetails time={time} content={content} />
      <Icon src={bin} height="30px" />
    </div>
  );
};

export default Post;
