import GoogleAuth from "./GoogleAuth";
import rightArrow from "./../../../style/Icons/LandingPage/right-arrow.svg";

const Body = () => {
  return (
    <div className="landing-page-body">
      <h2>You don’t need 4 hours a day on Social media to make an impact</h2>
      <p>
        Schedule posts, use AI generated hashtags & moderate your community even
        in your absense.
      </p>
      <GoogleAuth icon={rightArrow} />
    </div>
  );
};

export default Body;
