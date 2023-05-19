import Input from "../../ui/Input";
import "./AddNewSpecies2.css";

import { useState } from "react";

function AddNewSpeciesOrigin(props) {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [imageurl, setImageurl] = useState("");

  return (
    <div className="form-2 rounded-20 column jc-space-evenly">
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
      <Input
        title="Origin"
        placeholder="Origin..."
        value={origin}
        type="origin"
        onChange={(event) => {
          setOrigin(event.target.value);
          // setError("");
        }}
        wide={true}
      />
      <Input
        title="Image url"
        placeholder="Image..."
        value={imageurl}
        type="imageurl"
        onChange={(event) => {
          setImageurl(event.target.value);
          // setError("");
        }}
        wide={true}
      />
    </div>
  );
}

export default AddNewSpeciesOrigin;
