import "./css/YieldCard.css";
import ButtonPrimary from "./ButtonPrimary";

function YieldCard(props) {
  let grow = props.grow;

  return (
    <div className="yield-card">
      <div className="yield-card-1st-column">
        img
        <button className="yield-history-button">history</button>
      </div>

      <div className="yield-card-2nd-column">
        <h2 className="">MUSHROOM NAME</h2>
        <h3 className="">Harvested on {}</h3>
        <p> A long comment,</p>
      </div>

      <div className="yield-card-3rd-column">
        <h1 className="">34.71</h1>
        <p> grams</p>
        <button className="">recipes</button>
      </div>
    </div>
  );
}
export default YieldCard;
