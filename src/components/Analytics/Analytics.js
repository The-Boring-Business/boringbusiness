import Analysis from "./Analysis";
import analysis from "./../../style/Images/Analytics.png";

const Analytics = () => {
  return (
    <div className="analytics">
      <img src={analysis} alt="analytics" />
      {/* <Analysis
        followerCount="11.7k"
        growthRate="33k"
        serviceName="Instagram"
      />
      <Analysis followerCount="11.7k" growthRate="33k" serviceName="Twitter" /> */}
    </div>
  );
};

export default Analytics;
