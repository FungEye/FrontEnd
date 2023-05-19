import "./History.css";
import "../../css/General.css";
export default function HistoryUseful() {
  return (
    <div className="usefulContainer p-10 column bg-med rounded-10 border-dark">
      <div className="row jc-space-between align-items-center">
        <p>🍄</p>
        <p className="varela usefulTitle">Useful</p>
        <p>🍄</p>
      </div>
      <div className="pagesContainer">
        <div className=" usefulLinks textHover varela">
          >See mushroom details
        </div>
        <div className=" usefulLinks textHover varela">>See recipes</div>
      </div>
    </div>
  );
}
