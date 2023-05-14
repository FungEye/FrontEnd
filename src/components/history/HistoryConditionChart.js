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
  return (
    <div className="column">
      <p className="varela text-dark h-name">{props.text}</p>
      <LineChart
        width={350}
        height={250}
        data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}
