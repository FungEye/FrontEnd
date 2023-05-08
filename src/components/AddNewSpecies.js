import AddNewSpeciesForm from "./AddNewSpeciesForm";
import "./css/AddNewSpecies.css";
import { useState } from 'react';

function AddNewSpecies(){

    return(
        <div className="cont column varela bg-light rounded-20 column jc-center very-slightly-faded border-dark">
      <div className="dashboard column align-items-center">
      <div className="mushroom-title text-dark ultra">Add new mushrooms</div>
      <div className="name"> placeholder for name</div>
      <div className="ultra text-dark">Ideal growth conditions</div>
      
        <div className="carousel ">
            <AddNewSpeciesForm/>
        </div>
      </div>
    </div>
    );
       
    
}   

export default AddNewSpecies;