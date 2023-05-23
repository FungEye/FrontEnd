import AddNewSpeciesForm2 from "./AddNewSpeciesForm2";
import "./css/AddNewSpecies.css";
import ButtonPrimary from "./ButtonPrimary";
import XButton from "./XButton";
import AddNewSpeciesOrigin from "./AddNewSpeciesOrigin";
import { useState } from "react";
import { useAuthUser, useAuthHeader } from "react-auth-kit";
import Input from "./Input";
import TextArea from "./TextArea";

function AddNewSpecies() {

  function newConditions() {
    return {
      "tempHigh": "",
      "tempLow": "",
      "humidityHigh": "",
      "humidityLow": "",
      "co2High": "",
      "co2Low": "",
      "lightHigh": "",
      "lightLow": ""
    }
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

  async function submitNewMushroom() {
    const username = auth().name;
    const mushroom = {
      name: mushroomName,
      description: description,
      origin: origin,
      idealConditionCreationDtos: [
        {
          "developmentStage": "spawn run",
          "tempHigh": spawnRunConditions.tempHigh,
          "tempLow": spawnRunConditions.tempLow,
          "humidityHigh": spawnRunConditions.humidityHigh,
          "humidityLow": spawnRunConditions.humidityLow,
          "co2High": spawnRunConditions.co2High,
          "co2Low": spawnRunConditions.co2Low,
          "lightHigh": spawnRunConditions.lightHigh,
          "lightLow": spawnRunConditions.lightLow
        },
        {
          "developmentStage": "pinning",
          "tempHigh": pinningConditions.tempHigh,
          "tempLow": pinningConditions.tempLow,
          "humidityHigh": pinningConditions.humidityHigh,
          "humidityLow": pinningConditions.humidityLow,
          "co2High": pinningConditions.co2High,
          "co2Low": pinningConditions.co2Low,
          "lightHigh": pinningConditions.lightHigh,
          "lightLow": pinningConditions.lightLow
        },
        {
          "developmentStage": "fruiting",
          "tempHigh": fruitingConditions.tempHigh,
          "tempLow": fruitingConditions.tempLow,
          "humidityHigh": fruitingConditions.humidityHigh,
          "humidityLow": fruitingConditions.humidityLow,
          "co2High": fruitingConditions.co2High,
          "co2Low": fruitingConditions.co2Low,
          "lightHigh": fruitingConditions.lightHigh,
          "lightLow": fruitingConditions.lightLow
        }
      ],
      username: username,
      imageUrl: imageUrl
    }

    console.log(mushroom);
    console.log(JSON.stringify(mushroom));

    async function submit(mushroom) {
      let url = ""
      switch (username) {
        case "admin":
          url += "https://fungeye-383609.ey.r.appspot.com/mushroom/default";
          break;
        default:
          url += "https://fungeye-383609.ey.r.appspot.com/mushroom/custom/conditions";
          break;
      }
      await fetch(
        url,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: authHeader(),
          },
          body: JSON.stringify(mushroom)
        },
      )
      .catch(err => {
        console.log(err);
      });
    }
    await submit(mushroom);
  }

  return (
    <div className="cont column varela bg-light rounded-20 column jc-center very-slightly-faded border-dark">
      <div className="align-self-start">
        <XButton />
      </div>
      <div className="dashboard column align-items-center">
        <div id="new-species-title" className="mushroom-title text-dark ultra">
          {/* {isEdit? "Edit Species" : "Add New Species"} */}
          Add New Species
        </div>
        <div className="row ans-inputs-row">
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
            <TextArea onChange={(event) => {
                setDescription(event.target.value);
              }} value={description} title="Description"/>
          </div>
        </div>

        <div className="ans-info text-dark">
          Provide ideal growing conditions for each phase...
        </div>
        <div className="phases column align-items-center gap-20">
          <div className="row gap-20">
            {!spawnRunConditions ? (
              <div>Loading</div>
            ) :
              <AddNewSpeciesForm2 conditions={spawnRunConditions} setConditions={setSpawnRunConditions} title="Spawning" />
            }
            <AddNewSpeciesForm2 conditions={pinningConditions} setConditions={setPinningConditions} title="Pinning" />
          </div>
          <AddNewSpeciesForm2 conditions={fruitingConditions} setConditions={setFruitingConditions} title="Fruiting" />
        </div>
        <div className="text-dark">
          <ButtonPrimary onClick={async () => { await submitNewMushroom() }} wide={true} text="Add Mushroom" />
        </div>
      </div>
    </div>
  );
}

export default AddNewSpecies;
