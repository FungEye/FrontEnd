import "../css/History.css";
import "../css/General.css";
import { useState, useEffect, useCallback } from "react";
export default function HistoryToggle(props) {
  const [graphClassName, setGraphClassName] = useState("");
  const [tableClassName, setTableClassName] = useState("");

  const toggleGraph = useCallback(() => {
    let classGraph = "w-50 hb-graph hb-pointer roundedGraph rounded-10";
    let classTable = "w-50 hb-table hb-pointer roundedTable rounded-10";
    let f = " focused";
    props.isGraph ? (classGraph += f) : (classTable += f);
    setGraphClassName(classGraph);
    setTableClassName(classTable);
  }, [props.isGraph]);

  useEffect(() => toggleGraph(), [toggleGraph]);

  return (
    <div className="toggleContainer row w-50 rounded-10 border-dark">
      <div className={graphClassName} onClick={() => props.toggle("graph")}>
        <p className="varela text-dark textHover h-xs ">Graph</p>{" "}
      </div>
      <div className={tableClassName} onClick={() => props.toggle("table")}>
        <p className="varela text-dark textHover h-xs">Table</p>
      </div>
    </div>
  );
}
