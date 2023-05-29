import React, { useState } from "react";
import "../css/AutoCompleteInput.css";

const AutocompleteInput = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const options = ["Shiitake", "Oyster", "Pioppino", "BasicBoringMushroom"];

  const handleInputChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchText)
    );
    setSearchText(e.target.value);
    setFilteredOptions(filteredOptions);
  };

  const handleOptionClick = (option) => {
    setSearchText(option);
    setFilteredOptions([]);
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        placeholder="Filter by mushroom name..."
        value={searchText}
        onChange={handleInputChange}
      />
      <ul className="autocomplete-dropdown">
        {filteredOptions.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutocompleteInput;
