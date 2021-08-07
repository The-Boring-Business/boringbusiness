import GoogleAuth from "./GoogleAuth";
import rightArrow from "./../../../style/Icons/LandingPage/right-arrow.svg";

const Body = () => {
  return (
    <div className="landing-page-body">
      <h2>Focus on your content leave the rest to us</h2>
      <p>
        Schedule posts, use AI generated hashtags & moderate your community even
        in your absense.
      </p>
      <GoogleAuth icon={rightArrow} />
    </div>
  );
};

export default Body;
