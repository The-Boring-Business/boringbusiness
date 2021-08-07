import Chart from "./subcomponents/Chart";
import FollowerCount from "./subcomponents/FollowerCount";
import GrowthRate from "./subcomponents/GrowthRate";
import Blog from "./../UI Elements/Blog";

const Analysis = () => {
  return (
    <div>
      <Chart />
      <div>
        <FollowerCount />
        <GrowthRate />
        <Blog />
      </div>
    </div>
  );
};

export default Analysis;
