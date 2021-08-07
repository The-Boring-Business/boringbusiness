import Analysis from "./Analysis";

const Analytics = () => {
  return (
    <div>
      <Analysis
        followerCount="11.7k"
        growthRate="33k"
        serviceName="Instagram"
      />
      <Analysis followerCount="11.7k" growthRate="33k" serviceName="Twitter" />
    </div>
  );
};

export default Analytics;
