import User from "./User";
import Services from "./Services";
import UpdateInfo from "./UpdateInfo";

import pic from "./../../style/Images/Avatar.png";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-user-services">
        <User
          name="Rishabh Singh"
          picture={pic}
          username="mindninjaX"
          niche="Blogger"
          dob="15 June"
        />
        <Services />
      </div>
      <UpdateInfo />
    </div>
  );
};

export default Profile;
