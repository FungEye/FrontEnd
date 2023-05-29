import AddNewSpeciesForm2 from "./AddNewSpeciesForm2";
import "../css/AddNewSpecies.css";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import XButton from "../Buttons/XButton";
import { useState, useEffect } from "react";
import { useAuthUser, useAuthHeader } from "react-auth-kit";
import { useParams, useNavigate } from "react-router-dom";
import Input from "../Input Components/Input";
import TextArea from "../Input Components/TextArea";
import { setErrMsg } from "../../util/ErrorMessages";
import ErrorModal from "../Modals/ErrorModal";

function AddNewSpecies({ isEdit }) {
  const { mushroomId } = useParams();
  const navigate = useNavigate();
  function newConditions() {
    return {
      tempHigh: "",
      tempLow: "",
      humidityHigh: "",
      humidityLow: "",
      co2High: "",
      co2Low: "",
      lightHigh: "",
      lightLow: "",
    };
  }

  const [spawnRunConditions, setSpawnRunConditions] = useState(newConditions());
  const [pinningConditions, setPinningConditions] = useState(newConditions());
  const [fruitingConditions, setFruitingConditions] = useState(newConditions());

  const [mushroomName, setMushroomName] = useState("");
  const [origin, setOrigin] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const auth = useAuthUser();
  const authHeader = useAuthHeader();

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  async function submitNewMushroom() {
    const username = auth().name;
    const mushroom = {
      name: mushroomName,
      description: description,
      origin: origin,
      idealConditionCreationDtos: [
        {
          developmentStage: "spawn run",
          tempHigh: spawnRunConditions.tempHigh,
          tempLow: spawnRunConditions.tempLow,
          humidityHigh: spawnRunConditions.humidityHigh,
          humidityLow: spawnRunConditions.humidityLow,
          co2High: spawnRunConditions.co2High,
          co2Low: spawnRunConditions.co2Low,
          lightHigh: spawnRunConditions.lightHigh,
          lightLow: spawnRunConditions.lightLow,
        },
        {
          developmentStage: "pinning",
          tempHigh: pinningConditions.tempHigh,
          tempLow: pinningConditions.tempLow,
          humidityHigh: pinningConditions.humidityHigh,
          humidityLow: pinningConditions.humidityLow,
          co2High: pinningConditions.co2High,
          co2Low: pinningConditions.co2Low,
          lightHigh: pinningConditions.lightHigh,
          lightLow: pinningConditions.lightLow,
        },
        {
          developmentStage: "fruiting",
          tempHigh: fruitingConditions.tempHigh,
          tempLow: fruitingConditions.tempLow,
          humidityHigh: fruitingConditions.humidityHigh,
          humidityLow: fruitingConditions.humidityLow,
          co2High: fruitingConditions.co2High,
          co2Low: fruitingConditions.co2Low,
          lightHigh: fruitingConditions.lightHigh,
          lightLow: fruitingConditions.lightLow,
        },
      ],
      username: username,
      imageUrl: imageUrl,
    };

    async function submit(mushroom) {
      let url = "";

      switch (username) {
        case "admin":
          url += "https://fungeye-383609.ey.r.appspot.com/mushroom/default";
          break;
        default:
          url +=
            "https://fungeye-383609.ey.r.appspot.com/mushroom/custom/conditions";
          break;
      }
      await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authHeader(),
        },
        body: JSON.stringify(mushroom),
      })
        .then((response) => {
          if (response.ok) {
            navigate("/mushrooms");
          }
        })
        .catch((err) => {
          setErrorMessage(err.message);
          setShowErrorModal(true);
        });
    }
    await submit(mushroom);
  }

  function editMushroom() {
    const mushroom = {
      id: mushroomId,
      name: mushroomName,
      description: description,
      origin: origin,
      idealConditions: [
        {
          mushroomId: mushroomId,
          developmentStage: "spawn run",
          tempHigh: spawnRunConditions.tempHigh,
          tempLow: spawnRunConditions.tempLow,
          humidityHigh: spawnRunConditions.humidityHigh,
          humidityLow: spawnRunConditions.humidityLow,
          co2High: spawnRunConditions.co2High,
          co2Low: spawnRunConditions.co2Low,
          lightHigh: spawnRunConditions.lightHigh,
          lightLow: spawnRunConditions.lightLow,
        },
        {
          mushroomId: mushroomId,
          developmentStage: "pinning",
          tempHigh: pinningConditions.tempHigh,
          tempLow: pinningConditions.tempLow,
          humidityHigh: pinningConditions.humidityHigh,
          humidityLow: pinningConditions.humidityLow,
          co2High: pinningConditions.co2High,
          co2Low: pinningConditions.co2Low,
          lightHigh: pinningConditions.lightHigh,
          lightLow: pinningConditions.lightLow,
        },
        {
          mushroomId: mushroomId,
          developmentStage: "fruiting",
          tempHigh: fruitingConditions.tempHigh,
          tempLow: fruitingConditions.tempLow,
          humidityHigh: fruitingConditions.humidityHigh,
          humidityLow: fruitingConditions.humidityLow,
          co2High: fruitingConditions.co2High,
          co2Low: fruitingConditions.co2Low,
          lightHigh: fruitingConditions.lightHigh,
          lightLow: fruitingConditions.lightLow,
        },
      ],
      imageUrl: imageUrl,
    };
    fetch(`https://fungeye-383609.ey.r.appspot.com/mushroom/update`, {
      method: "PUT",
      headers: {
        Authorization: authHeader(),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mushroom),
    })
      .then((response) => {
        if (response.ok) navigate("/mushrooms");
        else {
          setErrMsg(setErrorMessage, response.status);
          setShowErrorModal(true);
        }
      })
      .catch((err) => {
        setErrMsg(err.message);
        setShowErrorModal(true);
      });
  }

  function archiveMushroom() {
    fetch(`https://fungeye-383609.ey.r.appspot.com/mushroom/${mushroomId}`, {
      method: "PATCH",
      headers: {
        Authorization: authHeader(),
      },
    })
      .then((response) => {
        response.ok
          ? setMessage("Mushroom archived successfully.")
          : setMessage("Error while archiving mushroom.");

        setTimeout(() => {
          setMessage("");
          if (response.ok) navigate("/mushrooms");
        }, 5000);
      })
      .catch((err) => setMessage("Error while archiving mushroom."));
  }

  useEffect(() => {
    if (isEdit) {
      fetch(`https://fungeye-383609.ey.r.appspot.com/mushroom/${mushroomId}`, {
        method: "GET",
        headers: {
          Authorization: authHeader(),
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((m) => {
          setDescription(m.description);

          setMushroomName(m.name);
          setOrigin(m.origin);
          setImageUrl(m.imageUrl);
        })
        .catch((err) => {
          setErrMsg(err.message);
          setShowErrorModal(true);
        });

      fetch(`https://fungeye-383609.ey.r.appspot.com/ideal/${mushroomId}`, {
        method: "GET",
        headers: {
          Authorization: authHeader(),
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
          else {
            setErrMsg(setErrorMessage, response.status);
            setShowErrorModal(true);
          }
        })
        .then((m) => {
          let spawnRun = m;
          let pinning = m;
          let fruiting = m;
          setSpawnRunConditions(
            spawnRun.filter((e) => e.developmentStage === "spawn run")[0]
          );
          setPinningConditions(
            pinning.filter((e) => e.developmentStage === "pinning")[0]
          );
          setFruitingConditions(
            fruiting.filter((e) => e.developmentStage === "fruiting")[0]
          );
        })
        .catch((err) => {
          setErrMsg(err.message);
          setShowErrorModal(true);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cont maxw-95 column varela bg-light rounded-20 column jc-center very-slightly-faded border-dark">
      {(auth().name !== "admin" && !isEdit) || auth().name === "admin" ? (
        <>
          <div className="align-self-start">
            <XButton onClick={() => navigate("/mushrooms")} />
          </div>
          <div className="dashboard column align-items-center maxw-95">
            <div
              id="new-species-title"
              className="mushroom-title text-dark ultra"
            >
              {isEdit ? "Edit species" : "Add new species"}
            </div>
            <div className="row ans-inputs-row flex-wrap jc-center">
              <div className="rounded-20 column align-items-center">
                <Input
                  title="Mushroom Name"
                  placeholder="Mushroom name..."
                  value={mushroomName}
                  onChange={(event) => {
                    setMushroomName(event.target.value);
                  }}
                  wide={true}
                />
                <Input
                  title="Origin"
                  placeholder="Origin..."
                  value={origin}
                  onChange={(event) => {
                    setOrigin(event.target.value);
                  }}
                  wide={true}
                />
                <Input
                  title="Image URL"
                  placeholder="Image URL..."
                  value={imageUrl}
                  onChange={(event) => {
                    setImageUrl(event.target.value);
                  }}
                  wide={true}
                />
              </div>
              <div>
                <TextArea
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                  value={description}
                  title="Description"
                />
              </div>
            </div>

            <div className="ans-info text-dark">
              {!isEdit ? "Provide" : "Edit"} ideal growing conditions for each
              phase.
            </div>
            <div className="phases column align-items-center gap-20">
              <div className="row gap-20 flex-wrap jc-center">
                {!spawnRunConditions ? (
                  <div>Loading</div>
                ) : (
                  <AddNewSpeciesForm2
                    conditions={spawnRunConditions}
                    setConditions={setSpawnRunConditions}
                    title="Spawn Run"
                  />
                )}
                <AddNewSpeciesForm2
                  conditions={pinningConditions}
                  setConditions={setPinningConditions}
                  title="Pinning"
                />
              </div>
              <AddNewSpeciesForm2
                conditions={fruitingConditions}
                setConditions={setFruitingConditions}
                title="Fruiting"
              />
            </div>
            <div className="text-dark row jc-space-around w-100 ">
              <ButtonPrimary
                onClick={async () => {
                  !isEdit ? await submitNewMushroom() : editMushroom();
                }}
                wide={true}
                text={isEdit ? "Save changes" : "Add mushroom"}
                id={isEdit ? "save-changes-btn" : "add-mushroom-btn"}
              />
              {isEdit ? (
                <ButtonPrimary
                  onClick={archiveMushroom}
                  wide={true}
                  text={"Archive mushroom"}
                />
              ) : null}
            </div>
            <div className="text-dark">{message}</div>
          </div>
        </>
      ) : (
        <p className="poppins text-dark errorMessage-newSpecies">
          Oh my good! You are so clever to modify the URL, but unfortunately you
          cannot modify mushrooms.
        </p>
      )}
      <ErrorModal
        show={showErrorModal}
        setShow={setShowErrorModal}
        message={errorMessage}
      />
    </div>
  );
}

export default AddNewSpecies;
