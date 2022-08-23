import ChartBar from "./CharBar";
import "./Chart.css";

function Chart(props) {
  const dataPoints = props.dataPoints;
  const valueArray = dataPoints.map((item) => item.value);
  const maxValue = Math.max(...valueArray);
  return (
    <div className="chart">
      {dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
