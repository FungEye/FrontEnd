import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./components/Introduction and User Access/Welcome";
import ChooseBox from "./components/Box Selection Page/ChooseBox";
import Dashboard from "./components/Dashboard Page/Dashboard";
import AddNewSpecies from "./components/Add New Species Page/AddNewSpecies";
import RegisterLogin from "./components/Introduction and User Access/RegisterLogin";
import { useIsAuthenticated } from "react-auth-kit";
import MushroomCardPage from "./components/Mushroom Selection Page/MushroomCardPage";
import NavBar from "./components/Navigation Bar/NavBar";
import History from "./components/Historical Data Page/History";
import Guide from "./components/Introduction and User Access/Guide";
import YieldPage from "./components/Yields Page/YieldPage";
import OverviewPage from "./components/Overview Page/OverviewPage";
function App() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/boxes"
          element={isAuthenticated() ? <ChooseBox /> : <Navigate to="/login" />}
        />
        <Route
          path="/boxes/:mushroomId"
          element={isAuthenticated() ? <ChooseBox /> : <Navigate to="/login" />}
        />

        <Route
          path="/new"
          element={
            isAuthenticated() ? <AddNewSpecies /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/edit/:mushroomId"
          element={<AddNewSpecies isEdit={true} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/:boxId"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        />

        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard/:boxId/new"
          element={
            isAuthenticated() ? (
              <Dashboard isNew={true} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<RegisterLogin />} />
        <Route
          path="/mushrooms"
          element={
            isAuthenticated() ? <MushroomCardPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/yields"
          element={isAuthenticated() ? <YieldPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/history/:boxId"
          element={isAuthenticated() ? <History /> : <Navigate to="/login" />}
        />
        <Route path="/guide" element={<Guide />} />
        <Route
          path="/overview"
          element={
            isAuthenticated() ? <OverviewPage /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
