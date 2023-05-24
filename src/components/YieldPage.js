import "./css/General.css";
import "./css/YieldPage.css";
import YieldCard from "./YieldCard";
import { useEffect, useCallback, useState } from "react";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import ErrorModal from "./ErrorModal";
function YieldPage(props) {

  const [yieldList, setYieldList] = useState([]);
  const authHeader = useAuthHeader();
  const auth = useAuthUser();
  const username = auth().name;
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);

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
      .catch((err) => {
        setErrorMessage("Something went wrong in the request before it could reach the server. Check the url of your request?");
        setShowErrorModal(true);
      });
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
    <div>
      <div className="yields-title-container">
        <h1 className="text-light ultra">Y I E L D S</h1>
        <h4 className="text-light ">A history of your harvests.</h4>
        <button onClick={() => { getYields() }}>get Yields</button>
      </div>
      <div className="yield-cont">
        {yieldCardList}
      </div>
      <ErrorModal show={showErrorModal} setShow={setShowErrorModal} message={errorMessage} />
    </div>
  );
}
export default YieldPage;
