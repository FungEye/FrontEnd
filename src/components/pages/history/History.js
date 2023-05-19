import "./History.css";
import "../../css/General.css";
import HistoryToggle from "./HistoryToggle";
import HistoryUseful from "./HistoryUseful";
import { useState } from "react";
import CarouselGraph from "./HistoryChartsCarousel";
import CarouselTable from "./HistoryTableCarousel";
import ButtonSecondary from "../../ui/ButtonSecondary";
export default function History(props) {
  const [isGraph, setIsGraph] = useState(true);

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
            {isGraph ? <CarouselGraph /> : <CarouselTable />}
          </div>
        </div>
      </div>
    </div>
  );
}
