import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Legend,
} from "recharts";
import "../css/General.css";
import "../css/History.css";

export default function Chart(props) {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="h-xs varela">Value: {payload[0].value}</p>
          <p className="h-xs varela">Date time : {payload[0].payload.date}</p>
        </div>
      );
    }
  };

  return (
    <div className="column jc-center align-items-center">
      <p className="varela text-dark h-name">{props.text}</p>
      <LineChart
        width={400}
        height={300}
        data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={CustomTooltip} />
        <Line type="monotone" dataKey="value" stroke="#763D2D" />
      </LineChart>
    </div>
  );
}
