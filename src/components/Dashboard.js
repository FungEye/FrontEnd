import "./css/Dashboard.css";
import { useState, useEffect, useCallback } from "react";

function Dashboard(){
	const [measurement, setMeasurement] = useState(null);
	const [timestamp, setTimestamp] = useState(null);
  
	const handleClick = useCallback(() => {
	  fetch(`https://fungeye-383609.ey.r.appspot.com/box1/measurements/latest`)
		.then((response) => {
		  if (response.ok) return response.json();
		})
		.then((m) => {
		  setMeasurement(m);
		  setTimestamp(initTimestampString(m.id.dateTime));
		})
		.catch((err) => console.log(err));
	}, []);
  
	useEffect(() => {
	  handleClick();
	}, [handleClick]);
  
	function initTimestampString(x) {
	  let result = ``;
	  if (x.day < 10) {
		result += "0";
	  }
	  result += `${x.day}/`;
	  if (x.month < 10) {
		result += "0";
	  }
	  result += `${x.month}/`;
	  result += `${x.year} `;
	  if (x.hour < 10) {
		result += "0";
	  }
	  result += `${x.hour}:`;
	  if (x.minute < 10) {
		result += "0";
	  }
	  result += `${x.minute}:`;
  
	  if (x.second < 10) {
		result += "0";
	  }
	  result += `${x.second}`;
  
	  return result;
	}

    return (
    <div class="cont bg-light rounded-20 column jc-center slightly-faded border-dark">
        <div class="dashboard">
		<div class="header ultra text-dark ">
			Dashboard
		</div>
        <div class="time ultra text-dark"> {timestamp == null ? "Loading date..." : timestamp} </div>
		<div class="measurements">
			<div class = "border-dark">
				<h2 class="ultra text-dark">Temperature</h2>
				<p>{measurement == null ? -1 : measurement.temperature}&deg;C</p>
			</div>
			<div class = "border-dark">
				 <h2 class="ultra text-dark">Humidity</h2>
				<p>{measurement == null ? -1 : measurement.humidity}%</p>
			</div>
			<div class = "border-dark">
				 <h2 class="ultra text-dark">CO2</h2>
				<p>{measurement == null ? -1 : 0} ppm</p>
			</div>
			<div class = "border-dark">
				 <h2 class="ultra text-dark">Light</h2>
				<p>{measurement == null ? -1 : 0} lux</p>
			</div>
		</div>
		<div class="footer border-dark">
        <h3 class="ultra text-dark">Ideal Temperature:</h3>
				<p>69&deg;C</p>
                <h4>Suggestion: blablabalbabla</h4>
		</div>
	</div>
    </div>

    );
}
export default Dashboard;