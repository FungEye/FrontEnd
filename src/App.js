import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./components/Welcome";
import ChooseBox from "./components/ChooseBox";
import Dashboard from "./components/Dashboard";
import AddNewSpecies from "./components/AddNewSpecies";
import RegisterLogin from "./components/RegisterLogin";
import { useIsAuthenticated } from "react-auth-kit";
import MushroomCardPage from "./components/MushroomCardPage";
import NavBar from "./components/NavBar";
import History from "./components/history/History";
import Guide from "./components/Guide";
import YieldPage from "./components/YieldPage";
import RecipePage from "./components/RecipePage";
import RecipeDetailPage from "./components/RecipeDetailPage";
import OverviewPage from "./components/OverviewPage";
import ErrorModal from "./components/ErrorModal";
function App() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/boxes" element={
          isAuthenticated() ? <ChooseBox /> : <Navigate to="/login" />
        } />
        <Route
          path="/boxes/:mushroomId"
          element={isAuthenticated() ? <ChooseBox /> : <Navigate to="/login" />}
        />

        <Route path="/new" element={isAuthenticated() ? <AddNewSpecies /> : <Navigate to="/login" />} />
          path="/edit/:mushroomId"
          element={<AddNewSpecies isEdit={true} />
        {/* add to empty dashboard page an error modal saying "you have not specified a boxId for the dashboard." */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:boxId" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />

        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard/:boxId/new"
          element={
            isAuthenticated() ? <Dashboard isNew={true} /> : <Navigate to="/login" />
          }
        />
        <Route path="/login" element={<RegisterLogin/>} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
        <Route
          path="/mushrooms"
          element={isAuthenticated() ? <MushroomCardPage /> : <Navigate to="/login" />}
        />
        <Route path="/yields" element={isAuthenticated() ? <YieldPage /> : <Navigate to="/login" />} />
        <Route path="/history/:boxId" element={isAuthenticated() ? <History /> : <Navigate to="/login" />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/overview" element={isAuthenticated() ? <OverviewPage /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
