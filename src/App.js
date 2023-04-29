import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Box from "./components/Box";
import Dashboard from "./components/Dashboard";
import RegisterLogin from "./components/RegisterLogin";
import { useIsAuthenticated } from "react-auth-kit";

function App() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/box"
          element={isAuthenticated() ? <Box /> : <RegisterLogin />}
        ></Route>
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <RegisterLogin />}
        />
        <Route path="/login" element={<RegisterLogin />} />
      </Routes>
    </div>
  );
}

export default App;
