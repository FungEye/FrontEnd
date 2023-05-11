import "./css/History.css";
import "./css/General.css";
import { useState, useEffect, useCallback } from "react";
export default function HistoryToggle(props) {
  const [graphClassName, setGraphClassName] = useState("");
  const [tableClassName, setTableClassName] = useState("");

  const toggleGraph = useCallback(() => {
    let classLeft = "w-50 hb-left hb-pointer";
    let classRight = "w-50 hb-right hb-pointer";
    if (props.isGraph) {
      setTableClassName(classLeft);
      classRight += " focused";
      setGraphClassName(classRight);
    } else {
      setGraphClassName(classRight);
      classLeft += " focused";
      setTableClassName(classLeft);
    }
  }, [props.isGraph]);

  useEffect(() => toggleGraph, [toggleGraph]);

  return (
    <div className="toggleContainer row w-25 rounded-10 border-dark">
      <div className={graphClassName}>
        <p className="varela text-dark h-xs ">Graph</p>{" "}
      </div>
      <div className={tableClassName}>
        <p className="varela text-dark h-xs">Table</p>
      </div>
    </div>
  );
}
