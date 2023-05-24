import "./css/General.css";
import "./css/YieldPage.css";
import YieldCard from "./YieldCard";
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
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    getYields();
  }, [getYields]);


  let yieldCardList;

  if (yieldList) {
    yieldCardList = yieldList.map(x => (<YieldCard key={x.id} myYield={x} />))
  }

  return (
    <div className="yield-page bg-light rounded-20 text-dark poppins column align-items-center">
      <div className="yield-page-title ultra">
        Yields
      </div>
      <div>
        A history of your harvests.
      </div>
      <div className="yield-cards w-100 column align-items-center">
        {yieldCardList}
      </div>
    </div>
  );
}
export default YieldPage;
