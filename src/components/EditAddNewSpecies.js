import AddNewSpeciesForm2 from "./AddNewSpeciesForm2";
import "./css/AddNewSpecies.css";
import { useState } from 'react';
import ButtonSecondary from "./ButtonSecondary";
import ButtonPrimary from "./ButtonPrimary";
import Input from "./Input";
import XButton from "./XButton";
import AddNewSpeciesOrigin from "./AddNewSpeciesOrigin";

function EditAddNewSpecies() {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [imageurl, setImageurl] = useState('');
  const [spawningConditions, setSpawningConditions] = useState(getNewConditions());
  const [piningConditions, setPiningConditions] = useState(getNewConditions());
  const [fruitingConditions, setFruitingConditions] = useState(getNewConditions());

  function getNewConditions() {
    return {
      "temperature": 0,
      "humidity": 0,
      "co2": 0,
      "light": 0
    }
  }
  function clearName(textarea) {
    if (textarea.value === textarea.defaultValue) {
      textarea.value = '';
    }
  }

  function updateCondition(oldCondition, stat, value) {
    let newCondition = {...oldCondition};
    switch (stat) {
      case "temp":
        newCondition.temperature = value;
        break;
      case "humidity":
        newCondition.humidity = value;
        break;
      case "co2":
        newCondition.co2 = value;
        break;
      case "light":
        newCondition.light = value;
        break;
      default:
        return;
        
    }
    return newCondition;
  }

  return (
    <div className="cont column varela bg-light rounded-20 column jc-center very-slightly-faded border-dark">
      <div className="align-self-start">
        <XButton />
      </div>
      <div className="dashboard column align-items-center">
        <div id="new-species-title" className="mushroom-title text-dark ultra">Add new species</div>
        <div className="origin-row row">
          <AddNewSpeciesOrigin/>
          <div className="origindescription" placeholder="Description">
            <textarea rows="10" cols="30" placeholder="Description">
  
            </textarea>
          </div>
        </div>
        <div className="ans-info text-dark">Provide ideal growing conditions for each phase...</div>
        <div className="phases column align-items-center gap-20">
          <div className="row gap-20">
            <AddNewSpeciesForm2 title="Spawning"/>
            <AddNewSpeciesForm2 title="Pining" />
          </div>
          <AddNewSpeciesForm2 title="Fruiting" />
        </div>
        <div className="text-dark row gap-10">
            <ButtonPrimary wide={true} text="Archive" />
          <ButtonPrimary wide={true} text="Save" />
        </div>
      </div>
    </div>
  );

}

export default EditAddNewSpecies;