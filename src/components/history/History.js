import ButtonSecondary from "../ButtonSecondary";
import "../css/History.css";
import "../css/General.css";
import HistoryToggle from "./HistoryToggle";
import HistoryUseful from "./HistoryUseful";
import { useState, useEffect } from "react";
import CarouselGraph from "./HistoryChartsCarousel";
import CarouselTable from "./HistoryTableCarousel";
import { useAuthHeader } from "react-auth-kit";
import { useNavigate, useParams } from "react-router-dom";
import { setErrMsg, errorMessages } from "../../util/ErrorMessages";
import ErrorModal from "../ErrorModal";

export default function History() {
  const [isGraph, setIsGraph] = useState(true);
  const [error, setError] = useState("");
  const authHeader = useAuthHeader();
  const { boxId } = useParams();
  const [graphData, setGraphData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchGraphData = () => {
      setError("");
      fetch(
        `https://fungeye-383609.ey.r.appspot.com/box${boxId}/measurements/historical`,
        {
          method: "GET",
          headers: {
            Authorization: authHeader(),
          },
        }
      )
        .then((response) => {
          if (response.ok) return response.json();
          else {
            setErrMsg(setErrorMessage, response.status);
            setShowErrorModal(true);
          }
        })
        .then((m) => {

          setGraphData(m);
        })
        .catch((err) => {
          setErrorMessage(errorMessages.errBefore);
          setShowErrorModal(true);
        });
    };

    const fetchTableData = () => {
      setError("");
      fetch(
        `https://fungeye-383609.ey.r.appspot.com/box${boxId}/measurements`,
        {
          method: "GET",
          headers: {
            Authorization: authHeader(),
          },
        }
      )
        .then((response) => {
          if (response.ok) return response.json();
          else {
            setErrMsg(setErrorMessage, response.status);
            setShowErrorModal(true);
          }
        })
        .then((m) => {
          setTableData(m);
        })
        .catch((err) => {
          setErrorMessage(errorMessages.errBefore);
          setShowErrorModal(true);
        });
    };

    fetchGraphData();
    fetchTableData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggle(element) {
    if (isGraph && element === "table") {
      setIsGraph(false);
    } else if (!isGraph && element === "graph") {
      setIsGraph(true);
    }
  }

  return (
    <div className="historyPageContainer row jc-center align-items-center">
      <div className="historyContainer maxw-95 column bg-light rounded-20">
        <ButtonSecondary
          text="< Back"
          onClick={() => { navigate("/overview/")}}
        />
        <div className="titleContainer w-100 align-items-center jc-center ">
          <div className="ultra text-dark historyTitle">
            History of measurements
          </div>
        </div>
        <div className="content-container align-items-center jc-space-between flex-wrap row w-100 p-10 ">
          <div className="left-container column jc-space-evenly align-items-center">
            {/* Here will be name, date, boxID, viewToggle and useful. Column */}
            <div className="varela text-dark h-name">Shiitake</div>
            <div className="varela text-dark h-sm">Started: 27/04/2023</div>
            <div className="varela text-dark h-sm">Grow #3</div>
            <HistoryToggle isGraph={isGraph} toggle={toggle} />
            <HistoryUseful />
          </div>
          <div className="right-container row jc-start align-items-center h-75 p-10 ">
            {isGraph ? (
              <CarouselGraph data={graphData} />
            ) : (
              <CarouselTable data={tableData} />
            )}
          </div>
        </div>
        <p>{error}</p>
      </div>
      <ErrorModal show={showErrorModal} setShow={setShowErrorModal} message={errorMessage} />
    </div>
  );
}
