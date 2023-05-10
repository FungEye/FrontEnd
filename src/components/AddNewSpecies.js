import AddNewSpeciesForm from "./AddNewSpeciesForm";
import "./css/AddNewSpecies.css";
import { useState } from 'react';
import ButtonSecondary from "./ButtonSecondary";
import ButtonPrimary from "./ButtonPrimary";
import Input from "./Input";

function AddNewSpecies(){
  const [name, setName] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
  }
    return(
        <div className="cont column varela bg-light rounded-20 column jc-center very-slightly-faded border-dark">
          <form onSubmit={handleFormSubmit}>
      <div className="dashboard column align-items-center">
      <div id="new-species-title" className="mushroom-title text-dark ultra">Add new species:</div>
      <Input
                  title="Mushroom name"
                  placeholder="Mushroom name..."
                  value={name}
                  type="mushroom-name"
                  onChange={(event) => {
                    setName(event.target.value);
                    // setError("");
                  }}
                  wide={true}
                />
      <div class="ans-info text-dark">Provide ideal growing conditions for each phase...</div>
      <div className="name text-dark row jc-space-evenly align-items-center w-100 "> 
      
        </div>
        <div className="phases">
            <AddNewSpeciesForm title="Phase 1:"/>
            <AddNewSpeciesForm title="Phase 2:"/>
            <AddNewSpeciesForm title="Phase 3:"/>
            <AddNewSpeciesForm title="Phase 4:"/>
        </div>
        <div className="text-dark row jc-space-evenly align-items-center w-100 "> 
        <ButtonSecondary text="Back" />
        <ButtonPrimary wide={true} text="Add Mushroom" />
        </div>
      </div>
      </form>
    </div>
    );
       
    
}   

export default AddNewSpecies;