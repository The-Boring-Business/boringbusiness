import Chart from "./subcomponents/Chart";
import FollowerCount from "./subcomponents/FollowerCount";
import GrowthRate from "./subcomponents/GrowthRate";
import Blog from "./../UI Elements/Blog";

const Analysis = ({ followerCount, growthRate, serviceName }) => {
  return (
    <div>
      <Chart />
      <div>
        <FollowerCount followerCount={followerCount} />
        <GrowthRate growthRate={growthRate} />
        {/* <Blog serviceName={serviceName} /> */}
      </div>
    </div>
  );
};

export default Analysis;
