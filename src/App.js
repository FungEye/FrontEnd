import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Box from "./components/Box";
import Dashboard from "./components/Dashboard";
import MushroomCard from "./components/MushroomCard";

function App() {

  let mushroom = {
    "shroomname": "Oyster",
    "imgsrc": "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImIwNTMzOTI0Njk2ZGJlOTIzZTUyMDdlYWEyMjM5NGY3LmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=7bb476fd5c2f284f475942393f2edca779877dd2fb10e2574b78ae751080535c"
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/box" element={<Box />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shroomcard" element={<MushroomCard mushroom={mushroom} />} />
      </Routes>
    </div>
  );
}



export default App;
