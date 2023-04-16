import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./css/MushroomCard.css";
const data = [
  {
    name: "Spawn",
    temp: 75,
    humidity: 90,
    light: 0,
    CO2: 85,
  },
  {
    name: "Pinhead",
    temp: 35,
    humidity: 45,
    light: 500,
    CO2: 15,
  },
  {
    name: "Fruiting",
    temp: 20,
    humidity: 30,
    light: 1000,
    CO2: 50,
  },
];

function MushroomCard(props) {
  return (
    <div className="mushroomCard">
      <div>OYSTER SHROOM</div>
      <div className="charts">
        <div className="barChart">
          <BarChart width={200} height={100} data={data}>
            <XAxis tick={{ fontSize: 10 }} dataKey="name" tickSize={5} />
            <Bar dataKey="temp" fill="rgb(115, 27, 27)" />
            <Legend height={1} />
            <Tooltip />
          </BarChart>
        </div>
        <div className="barChart">
          <BarChart width={200} height={100} data={data}>
            <XAxis tick={{ fontSize: 10 }} dataKey="name" tickSize={5} />
            <Bar dataKey="humidity" fill="rgb(149, 155, 212)" />
            <Legend height={1} />
            <Tooltip />
          </BarChart>
        </div>
        <div className="barChart">
          <BarChart width={200} height={100} data={data}>
            <XAxis tick={{ fontSize: 10 }} dataKey="name" tickSize={5} />
            <Bar dataKey="light" fill="rgb(219, 218, 91)" />
            <Legend height={1} />
            <Tooltip />
          </BarChart>
        </div>
        <div className="barChart">
          <BarChart width={200} height={100} data={data}>
            <XAxis tick={{ fontSize: 10 }} dataKey="name" tickSize={5} />
            <Bar dataKey="CO2" fill="rgb(88, 89, 89)" />
            <Legend height={1} />
            <Tooltip />
          </BarChart>
        </div>
      </div>
    </div>
  );
}
//Spawn run, Pinhead formation, Fruiting
export default MushroomCard;
