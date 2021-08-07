import Query from "./Query";
import profilePicture from "./../../../style/Images/sender_image.png";

const Queries = () => {
  return (
    <div>
      <h2>Raised Queries</h2>
      <Query
        profilePicture={profilePicture}
        senderName="Alex Chapri"
        label="Feedback"
        message="Can we have a music channel?"
      />
      <Query
        profilePicture={profilePicture}
        senderName="Alex Chapri"
        label="Complain"
        message="Admins are pining too often :("
      />
    </div>
  );
};

export default Queries;
