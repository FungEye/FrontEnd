import AutocompleteInput from "../../ui/AutocompleteInput";
import "../../css/General.css";
import "./YieldPage.css";
import YieldCard from "./YieldCard";
import { useEffect, useCallback } from "react";
function YieldPage(props) {
  // let yieldsList = props.yieldsList;
  const getYields = useCallback(() => {
    fetch(`https://fungeye-383609.ey.r.appspot.com/harvest/1`)
      .then((res) => {
        console.log(res);
        if (res.ok) return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getYields();
  }, [getYields]);
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
