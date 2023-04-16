import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Box from "./components/Box";
import MushroomCard from "./components/MushroomCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/FrontEnd" element={<Welcome />} />
        <Route path="/FrontEnd/box" element={<Box />} />
        <Route path="/Frontend/mushrooms" element={<MushroomCard />} />
      </Routes>
    </div>
  );
}

export default App;
