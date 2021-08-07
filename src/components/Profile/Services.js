import Service from "./subcomponents/Service";

import insta from "./../../style/Icons/Profile/insta.svg";
import twitter from "./../../style/Icons/Profile/twitter.svg";
import discord from "./../../style/Icons/Profile/discord.svg";

const Services = () => {
  return (
    <div className="component">
      <h2>Connect Services</h2>
      <div>
        <Service
          icon={insta}
          serviceName="Instagram"
          description="Connect Instagram to schedule posts, use AI tools & see analytics!"
        />
        <Service
          icon={twitter}
          serviceName="Twitter"
          description="Connect Twitter to schedule posts, use AI tools & see analytics!"
        />
        <Service
          icon={discord}
          serviceName="Discord"
          description="Connect Discord to listen to queries & moderate your community!"
        />
      </div>
    </div>
  );
};

export default Services;
