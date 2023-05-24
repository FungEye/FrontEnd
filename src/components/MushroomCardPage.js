import { useEffect, useState, useCallback } from "react";
import MushroomCard from "./MushroomCard";
import MushroomDetailsModal from "./MushroomDetailsModal";
import "./css/MushroomCardPage.css";
import { useAuthHeader } from "react-auth-kit";
import { setErrMsg } from "../util/ErrorMessages";
import ErrorModal from "./ErrorModal";

function MushroomCardPage() {
    const [mushrooms, setMushrooms] = useState(null);
    const [show, setShow] = useState(false);
    const [mushroomOnModal, setMushroomOnModal] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [showErrorModal, setShowErrorModal] = useState(false);
    const authHeader = useAuthHeader();

    const getData = useCallback(() => {
        fetch(
          `https://fungeye-383609.ey.r.appspot.com/mushrooms`,
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
            setMushrooms(m);
          })
          .catch((err) => {
            setErrorMessage("Something went wrong in the request before it could reach the server. Check the url of your request?");
            setShowErrorModal(true);
          });
          // eslint-disable-next-line
      }, []);

      useEffect(() => {
       getData();
      }, [getData]);


    return (
        <div className="column mushroom-page gap-20">
            {!mushrooms ? (
                <div className="column pt-15 text-light poppins">
                    Loading...
                </div>
            ) :
                <div>
                    <div className="start-grow-info text-light poppins">Pick a mushroom species to start a grow.</div>
                    <div className="mushroom-cards">
                        {mushrooms.map(x => <MushroomCard mushroom={x} showDetails={() => { setMushroomOnModal(x); setShow(true) }} key={x.name} />)}
                    </div>
                </div>
            }

            <MushroomDetailsModal show={show} setShow={setShow} mushroom={mushroomOnModal} />
            <ErrorModal show={showErrorModal} setShow={setShowErrorModal} message={errorMessage} />
        </div>

    )

}

export default MushroomCardPage

