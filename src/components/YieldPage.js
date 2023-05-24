import "./css/General.css";
import "./css/YieldPage.css";
import YieldCard from "./YieldCard";
import AutocompleteInput from "./AutocompleteInput";
import { useEffect, useCallback, useState } from "react";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
function YieldPage(props) {

  const [yieldList, setYieldList] = useState([]);
  const authHeader = useAuthHeader();
  const auth = useAuthUser();
  const username = auth().name;

  // let yieldsList = props.yieldsList;
  const getYields = useCallback(() => {
    fetch(`https://fungeye-383609.ey.r.appspot.com/harvest/${username}`,
      {
        method: "GET",
        headers: {
          Authorization: authHeader(),
        },
      }
    )
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        setYieldList(data);
        console.log(yieldList);
      })
      .catch((err) => console.log(err));
  }, []);

  
  useEffect(() => {
    getYields();
  }, [getYields]);
  

  let yieldCardList;

  if (yieldList) {
    yieldCardList = yieldList.map(x => (<YieldCard key={x.id} myYield={x} />))
  }

  return (
    <div>
      <div className="yields-title-container">
        <h1 className="text-light ultra">Y I E L D S</h1>
        <h4 className="text-light ">A history of your harvests.</h4>
        <button onClick={() => {getYields()}}>get Yields</button>
      </div>
      <div className="yield-cont">
        {yieldCardList}
      </div>
    </div>
  );
}
export default YieldPage;
