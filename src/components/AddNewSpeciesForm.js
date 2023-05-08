import { useState } from 'react';


const AddMushroomForm = () => {
  const [name, setName] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [co2, setCo2] = useState('');
  const [lux, setLux] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="carousel">
        <div className="carousel-inner">
      

          <div className="carousel-item">
            <h3>Phase 1</h3>
            <label>
              Temperature:
              <input
                type="text"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
              />
            </label>
            <label>
              Humidity:
              <input
                type="text"
                value={humidity}
                onChange={(e) => setHumidity(e.target.value)}
              />
            </label>
            <label>
              CO2:
              <input
                type="text"
                value={co2}
                onChange={(e) => setCo2(e.target.value)}
              />
            </label>
            <label>
              Light:
              <input
                type="text"
                value={lux}
                onChange={(e) => setLux(e.target.value)}
              />
            </label>
          </div>

         
          <div className="carousel-item">
            <h3>Phase 2</h3>
            <label>
              Temperature:
              <input
                type="text"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
              />
            </label>
            <label>
              Humidity:
              <input
                type="text"
                value={humidity}
                onChange={(e) => setHumidity(e.target.value)}
              />
            </label>
            <label>
              CO2:
              <input
                type="text"
                value={co2}
                onChange={(e) => setCo2(e.target.value)}
              />
            </label>
            <label>
              Light:
              <input
                type="text"
                value={lux}
                onChange={(e) => setLux(e.target.value)}
              />
            </label>
          </div>

    
          <div className="carousel-item">
            <h3>Phase 3</h3>
            <label>
              Temperature:
              <input
                type="text"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
              />
            </label>
            <label>
              Humidity:
              <input
                type="text"
                value={humidity}
                onChange={(e) => setHumidity(e.target.value)}
              />
            </label>
            <label>
              CO2:
              <input
                type="text"
                value={co2}
                onChange={(e) => setCo2(e.target.value)}
              />
            </label>
            <label>
              Light:
              <input
                type="text"
                value={lux}
                onChange={(e) => setLux(e.target.value)}
              />
            </label>
          </div>

        
          <div className="carousel-item">
            <h3>Phase 4</h3>
            <label>
              Temperature:
              <input
                type="text"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
              />
            </label>
            <label>
              Humidity:
              <input
                type="text"
                value={humidity}
                onChange={(e) => setHumidity(e.target.value)}
              />
            </label>
            <label>
              CO2:
              <input
                type="text"
                value={co2}
                onChange={(e) => setCo2(e.target.value)}
              />
            </label>
            <label>
              Light:
              <input
                type="text"
                value={lux}
                onChange={(e) => setLux(e.target.value)}
              />
            </label>
          </div>
        </div>
      </div>

      <button type="submit">Add Mushroom</button>
    </form>
  );
};

export default AddMushroomForm;