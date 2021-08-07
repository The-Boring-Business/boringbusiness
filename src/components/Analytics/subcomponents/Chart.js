import Icon from "./../../UI Elements/Icon";

const Chart = ({ impressions }) => {
  return (
    <div className="component">
      <div>
        <div>
          <p>Last 7 Days</p>
          <h2>{impressions} Impressions</h2>
        </div>
        <Icon />
      </div>
      <div>{/* Chart */}</div>
    </div>
  );
};

export default Chart;
