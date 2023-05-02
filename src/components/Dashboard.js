import "./css/Dashboard.css";

function Dashboard() {
  return (
    <div className="cont">
      <div className="dashboard">
        <div className="header">Dashboard</div>
        <div className="time">
          <span>&#8592;</span> March 13, 9:13 <span>&#8594;</span>
        </div>
        <div className="measurements">
          <div>
            <h2>Temperature</h2>
            <p>72&deg;C</p>
          </div>
          <div>
            <h2>Humidity</h2>
            <p>50%</p>
          </div>
          <div>
            <h2>CO2</h2>
            <p>800 ppm</p>
          </div>
          <div>
            <h2>Light</h2>
            <p>100 lux</p>
          </div>
        </div>
        <div className="footer">
          <h3>Ideal Temperature:</h3>
          <p>69&deg;C</p>
          <h4>Suggestion: blablabalbabla</h4>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
