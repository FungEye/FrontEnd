import AddNewSpeciesForm from "./AddNewSpeciesForm";
import "./css/AddNewSpecies.css";
import { useState } from 'react';
import ButtonSecondary from "./ButtonSecondary";
import ButtonPrimary from "./ButtonPrimary";

function AddNewSpecies(){
  const [name, setName] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
  }
    return(
        <div className="cont column varela bg-light rounded-20 column jc-center very-slightly-faded border-dark">
          <form onSubmit={handleFormSubmit}>
      <div className="dashboard column align-items-center">
      <div className="mushroom-title text-dark ultra">Add new species:</div>
      <div class="info text-dark"> <p> Provide ideal growing conditions for each phase...</p></div>
      <div className="name text-dark row jc-space-evenly align-items-center w-100 "> 
      <label>
             Mushroom name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
        </div>
        <div className="phases">
            <AddNewSpeciesForm title="Phase 1:"/>
            <AddNewSpeciesForm title="Phase 2:"/>
            <AddNewSpeciesForm title="Phase 3:"/>
            <AddNewSpeciesForm title="Phase 4:"/>
        </div>
        <div className="text-dark row jc-space-evenly align-items-center w-100 "> 
        <ButtonSecondary text="Back" />
        <ButtonPrimary text="Add Mushroom" />
        </div>
      </div>
      </form>
    </div>
    );
       
    
}   

export default AddNewSpecies;