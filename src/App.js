import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Box from "./components/Box";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/box" element={<Box />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}



export default App;
