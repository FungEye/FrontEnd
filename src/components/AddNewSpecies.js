import AddNewSpeciesForm from "./AddNewSpeciesForm";
import "./css/AddNewSpecies.css";
import { useState } from 'react';

function AddNewSpecies(){
  const [name, setName] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
  }
    return(
        <div className="cont column varela bg-light rounded-20 column jc-center very-slightly-faded border-dark">
          <form onSubmit={handleFormSubmit}>
      <div className="dashboard column align-items-center">
      <div className="mushroom-title text-dark ultra">Add new mushrooms</div>
      <div className="name">
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
            <AddNewSpeciesForm title="Phase 1"/>
            <AddNewSpeciesForm title="Phase 2"/>
            <AddNewSpeciesForm title="Phase 3"/>
            <AddNewSpeciesForm title="Phase 4"/>
        </div>
        <button type="submit" className="button bg-dark text-light poppins raise faded">Add Mushroom</button>
      </div>
      </form>
    </div>
    );
       
    
}   

export default AddNewSpecies;