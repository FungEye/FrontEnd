import ButtonSecondary from "./ButtonSecondary";
import "./css/History.css";
import "./css/General.css";
import HistoryToggle from "./HistoryToggle";
import HistoryUseful from "./HistoryUseful";
export default function History(props) {
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
            <p className="varela text-dark h-sm">Box #3</p>
            <HistoryToggle />
            <HistoryUseful isHistory={true} />
          </div>
          <div className="rightContainer w-50 h-100 ">
            {/* Here will be the carousel or table with historical data. Column */}
            <div>Carousel will be here </div>
          </div>
        </div>
      </div>
    </div>
  );
}
