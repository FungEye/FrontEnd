import "../css/History.css";
import "../css/General.css";
import { useNavigate } from "react-router-dom";
export default function HistoryUseful() {
  const navigate = useNavigate();
  return (
    <div className="usefulContainer p-10 column bg-med rounded-10 border-dark">
      <div className="row jc-space-between align-items-center">
        <p>🍄</p>
        <p className="varela usefulTitle">Useful</p>
        <p>🍄</p>
      </div>
      <div className="pagesContainer">
        <div
          className=" usefulLinks textHover varela"
          onClick={() => navigate("/mushrooms")}
        >
          >See mushroom details
        </div>
        <div
          className=" usefulLinks textHover varela"
          onClick={() => navigate("/recipes")}
        >
          >See recipes
        </div>
      </div>
    </div>
  );
}
