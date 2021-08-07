import Icon from "./Icon";

import rightArrow from "./../../style/Icons/Analytics/right_arrow.svg";
import flowChart from "./../../style/Icons/Analytics/flow_chart.svg";

const Blog = ({ serviceName }) => {
  return (
    <div className="component">
      <div>
        <p>Master {serviceName}</p>
        <Icon src={rightArrow} />
      </div>
      <h2>Learn how you can get more followers & engagement</h2>
      <img src={flowChart} alt="Flow Chart" />
    </div>
  );
};

export default Blog;
