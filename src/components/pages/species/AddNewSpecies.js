import ButtonPrimary from "../../ui/ButtonPrimary";
import XButton from "../../ui/XButton";
import "./AddNewSpecies.css";
import AddNewSpeciesForm2 from "./AddNewSpeciesForm2";
import AddNewSpeciesOrigin from "./AddNewSpeciesOrigin";

function AddNewSpecies() {
  return (
    <div className="cont column varela bg-light rounded-20 column jc-center very-slightly-faded border-dark">
      <div className="align-self-start">
        <XButton />
      </div>
      <div className="dashboard column align-items-center">
        <div id="new-species-title" className="mushroom-title text-dark ultra">
          {/* {isEdit? "Edit Species" : "Add New Species"} */}
          dAd new species
        </div>
        <div className="origin-row row">
          <AddNewSpeciesOrigin />
          <div className="origindescription" placeholder="Description">
            <textarea rows="10" cols="30" placeholder="Description"></textarea>
          </div>
        </div>
        <div className="ans-info text-dark">
          Provide ideal growing conditions for each phase...
        </div>
        <div className="phases column align-items-center gap-20">
          <div className="row gap-20">
            <AddNewSpeciesForm2 title="Spawning" />
            <AddNewSpeciesForm2 title="Pining" />
          </div>
          <AddNewSpeciesForm2 title="Fruiting" />
        </div>
        <div className="text-dark">
          <ButtonPrimary wide={true} text="Add Mushroom" />
        </div>
      </div>
    </div>
  );
}

export default AddNewSpecies;
