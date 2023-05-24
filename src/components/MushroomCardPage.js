import { useEffect, useState, useCallback } from "react";
import MushroomCard from "./MushroomCard";
import MushroomDetailsModal from "./MushroomDetailsModal";
import "./css/MushroomCardPage.css";
import ErrorModal from "./ErrorModal";
import { setErrMsg } from "../util/ErrorMessages";

import { useAuthHeader, useAuthUser } from "react-auth-kit";

function MushroomCardPage() {
  const [mushrooms, setMushrooms] = useState(null);
  const [show, setShow] = useState(false);
  const [mushroomOnModal, setMushroomOnModal] = useState(null);
  const authHeader = useAuthHeader();
  const authUser = useAuthUser();


  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);

  const getData = useCallback(() => {
    fetch(
      `https://fungeye-383609.ey.r.appspot.com/mushrooms/custom/${
        authUser().name
      }`,
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
        let mushroomsWithNoDuplicates = [];
        m.forEach((mushroom) => {
          if (
            !mushroomsWithNoDuplicates.find(
              (element) => element.id === mushroom.id
            )
          ) {
            mushroomsWithNoDuplicates.push(mushroom);
          }
        });
        setMushrooms(mushroomsWithNoDuplicates);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    getData();
  }, [getData]);


  return (
    <div className="column mushroom-page gap-20">
      {!mushrooms ? (
        <div className="column pt-15 text-light poppins">Loading...</div>
      ) : (
        <div>
          <div className="start-grow-info text-light poppins">
            Pick a mushroom species to start a grow.
          </div>
          <div className="mushroom-cards">
            {mushrooms.map((x) => (
              <MushroomCard
                mushroom={x}
                showDetails={() => {
                  setMushroomOnModal(x);
                  setShow(true);
                }}
                key={x.name}
              />
            ))}
          </div>

        </div>
      )}

      <MushroomDetailsModal
        show={show}
        setShow={setShow}
        mushroom={mushroomOnModal}
      />
          <ErrorModal show={showErrorModal} setShow={setShowErrorModal} message={errorMessage} />
    </div>
  );
}

export default MushroomCardPage;
