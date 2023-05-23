import ButtonSecondary from "../ButtonSecondary";
import "../css/History.css";
import "../css/General.css";
import HistoryToggle from "./HistoryToggle";
import HistoryUseful from "./HistoryUseful";
import { useState, useEffect } from "react";
import CarouselGraph from "./HistoryChartsCarousel";
import CarouselTable from "./HistoryTableCarousel";
import { useAuthHeader } from "react-auth-kit";
import { useParams } from "react-router-dom";

export default function History() {
  const [isGraph, setIsGraph] = useState(true);
  const [error, setError] = useState("");
  const authHeader = useAuthHeader();
  const { boxId } = useParams();
  const [graphData, setGraphData] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchGraphData = () => {
      setError("");
      fetch(
        `https://fungeye-383609.ey.r.appspot.com/box${boxId}/measurements/historical`,
        {
          method: "GET",
          headers: {
            Authorization: authHeader(),
          },
        }
      )
        .then((response) => {
          if (response.ok) return response.json();
          else if (response.status === 401)
            setError("You have to login first.");
        })
        .then((m) => {
  
          setGraphData(m);
        })
        .catch((err) => setError("Failed to fetch data."));
    };

    const fetchTableData = () => {
      setError("");
      fetch(
        `https://fungeye-383609.ey.r.appspot.com/box${boxId}/measurements`,
        {
          method: "GET",
          headers: {
            Authorization: authHeader(),
          },
        }
      )
        .then((response) => {
          if (response.ok) return response.json();
          else if (response.status === 401)
            setError("You have to login first.");
        })
        .then((m) => {
          setTableData(m);
        })
        .catch((err) => setError("Failed to fetch data."));
    };

    fetchGraphData();
    fetchTableData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggle(element) {
    if (isGraph && element === "table") {
      setIsGraph(false);
    } else if (!isGraph && element === "graph") {
      setIsGraph(true);
    }
  }

  return (
    <div className="historyPageContainer row jc-center align-items-center">
      <div className="historyContainer column bg-light rounded-20">
        <div className="backButtonContainer bg-dark row justify-self-start align-items-center">
          <ButtonSecondary
            text="< Back"
            onClick={() => console.log("Back button pressed")}
          />
        </div>
        <div className="titleContainer w-100 align-items-center jc-center ">
          <p className="ultra text-dark historyTitle">
            History of measurements
          </p>
        </div>
        <div className="contentContainer row w-100 h-75 p-10 ">
          <div className="leftContainer w-50 h-100 column jc-space-around align-items-center">
            {/* Here will be name, date, boxID, viewToggle and useful. Column */}
            <p className="varela text-dark h-name">Shiitake</p>
            <p className="varela text-dark h-sm">Started: 27/04/2023</p>
            <p className="varela text-dark h-sm">Grow #3</p>
            <HistoryToggle isGraph={isGraph} toggle={toggle} />
            <HistoryUseful />
          </div>
          <div className="rightContainer row jc-start align-items-center  w-50 h-75 p-10 ">
            {/* Here will be the carousel or table with historical data. Column */}
            {isGraph ? (
              <CarouselGraph data={graphData} />
            ) : (
              <CarouselTable data={tableData} />
            )}
          </div>
        </div>
        <p>{error}</p>
      </div>
    </div>
  );
}
