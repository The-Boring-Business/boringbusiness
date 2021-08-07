import graph from "./../../../style/Icons/Analytics/graph.svg";

const GrowthRate = ({ growthRate }) => {
  return (
    <div>
      <div>
        <p>Growth</p>
        <h3>+{growthRate}</h3>
      </div>
      <img src={graph} alt="growth" />
    </div>
  );
};

export default GrowthRate;
