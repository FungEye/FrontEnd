import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ChooseBox from "./components/ChooseBox";
import Dashboard from "./components/Dashboard";
import AddNewSpecies from "./components/AddNewSpecies";
import EditAddNewSpecies from "./components/EditAddNewSpecies";
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

  let box1 = {
    boxNumber: 1,
  };

  let box2 = {
    boxNumber: 2,
  };

  let box3 = {
    boxNumber: 3,
  };

  let box4 = {
    boxNumber: 4,
  };

  let box5 = {
    boxNumber: 5,
  };

  let box6 = {
    boxNumber: 6,
  };

  let box7 = {
    boxNumber: 7,
  };

  let box8 = {
    boxNumber: 8,
  };

  let box9 = {
    boxNumber: 9,
  };

  let box10 = {
    boxNumber: 10,
  };

  let box11 = {
    boxNumber: 11,
  };

  let box12 = {
    boxNumber: 12,
  };
  let boxList = [
    box1,
    box2,
    box3,
    box4,
    box5,
    box6,
    box7,
    box8,
    box9,
    box10,
    box11,
    box12,
  ];

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/chooseBox" element={<ChooseBox boxList={boxList} />} />
        <Route
          path="/boxes/:mushroomId"
          element={<ChooseBox boxList={boxList} />}
        />
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/species" element={<ManageSpecies isEdit={false} />} />
        <Route
          path="/species/:mushroomId"
          element={<ManageSpecies isEdit={true} />}
        /> */}

        <Route path="/addnewspecies" element={<AddNewSpecies />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:boxId" element={<Dashboard />} />
        <Route path="/editaddnewspecies" element={<EditAddNewSpecies />} />
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <RegisterLogin />}
        />
        <Route
          path="/dashboard/:boxId/new"
          element={
            isAuthenticated() ? <Dashboard isNew={true} /> : <RegisterLogin />
          }
        />
        <Route path="/login" element={<RegisterLogin />} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
        <Route
          path="/mushrooms"
          element={<MushroomCardPage/>}
        />
        <Route path="/yields" element={<YieldPage />} />
        <Route path="/history/:boxId" element={<History />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/overview" element={<OverviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
