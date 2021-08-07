import Queries from "./subcomponents/Queries";
import Reply from "./subcomponents/Reply";
import Blog from "./../UI Elements/Blog";

import profilePicture from "./../../style/Images/sender_image.png";

const Moderation = () => {
  return (
    <div>
      <Queries />
      <div>
        <Reply
          profilePicture={profilePicture}
          senderName="Alex Chapri"
          label="Feedback"
          message="Can we have a music channel?"
        />
        {/* <Blog /> */}
      </div>
    </div>
  );
};

export default Moderation;
