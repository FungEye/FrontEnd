import "./css/General.css";
import "./css/YieldPage.css";
import YieldCard from "./YieldCard";
import AutocompleteInput from "./AutocompleteInput";

function YieldPage(props) {
  let yieldsList = props.yieldsList;

  return (
    <div>
      <div className="yields-title-container">
        <h1 className="text-light ultra">Y I E L D S</h1>
        <h4 className="text-light ">A history of your harvests.</h4>
      </div>
      <div className="filter-cont">
        <AutocompleteInput></AutocompleteInput>
      </div>
      <div className="yield-cont">
        <YieldCard></YieldCard>
        <YieldCard></YieldCard>
      </div>
    </div>
  );
}
export default YieldPage;
