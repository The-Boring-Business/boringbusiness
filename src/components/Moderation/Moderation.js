import Queries from "./subcomponents/Queries";
import Reply from "./subcomponents/Reply";
import Blog from "./../UI Elements/Blog";

import profilePicture from "./../../style/Images/sender_image.png";
import moderation from "./../../style/Images/Moderation.png";

const Moderation = () => {
  return (
    <div className="moderation">
      
      <img src={moderation} alt="moderation" />
      {/* <Queries />
      <div>
        <Reply
          profilePicture={profilePicture}
          senderName="Alex Chapri"
          label="Feedback"
          message="Can we have a music channel?"
        />
        {/* <Blog /> */}
      {/* </div> */}
    </div>
  );
};

export default Moderation;
