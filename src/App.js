import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ChooseBox from "./components/ChooseBox";
import Dashboard from "./components/Dashboard";
import AddNewSpecies from "./components/AddNewSpecies";
import RegisterLogin from "./components/RegisterLogin";
import { useIsAuthenticated } from "react-auth-kit";
import MushroomCardPage from "./components/MushroomCardPage";
import NavBar from "./components/NavBar";
import Guide from "./components/Guide";

import OverviewPage from "./components/OverviewPage";
import RecipePage from "./components/RecipePage";
import RecipeDetailPage from "./components/RecipeDetailPage";
function App() {
  const isAuthenticated = useIsAuthenticated();
  let oyster = {
    shroomname: "Oyster",
    imgsrc:
      "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImIwNTMzOTI0Njk2ZGJlOTIzZTUyMDdlYWEyMjM5NGY3LmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=7bb476fd5c2f284f475942393f2edca779877dd2fb10e2574b78ae751080535c",
    origin: "Cuba",
    description:
      "This mushroom is picked by putinhas very often in Connecticut.",
    conditions: null,
  };

  let enoki = {
    shroomname: "Enoki",
    imgsrc: "https://myspork.files.wordpress.com/2010/05/enoki.gif",
  };

  let reishi = {
    shroomname: "Reishi",
    imgsrc:
      "https://www.mandalanaturals.com/wp-content/uploads/2019/03/reishi.png",
  };

  let shiitake = {
    shroomname: "Shiitake",
    imgsrc:
      "https://sitioaborigene.com.br/wp-content/uploads/2021/07/shiitake.png",
  };

  let wine_cap = {
    shroomname: "Wine Cap",
    imgsrc:
      "https://static.wixstatic.com/media/5e418a_500c96a24f394a1b879a246ba869f9e7~mv2.gif",
  };

  let pioppino = {
    shroomname: "Pioppino",
    imgsrc:
      "https://static.vecteezy.com/system/resources/thumbnails/009/974/113/small_2x/isolated-enoki-mushroom-cutout-on-white-background-free-png.png",
  };

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
  let mushroomList = [oyster, enoki, reishi, shiitake, wine_cap, pioppino];
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
        <Route path="/" element={<Welcome />} />
        <Route path="/addnewspecies" element={<AddNewSpecies />} />
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <RegisterLogin />}
        />
        <Route path="/login" element={<RegisterLogin />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/recipes" element={<RecipePage/>} />
        <Route path="/recipes/:recipeId" element={<RecipeDetailPage/>} />
        <Route
          path="/mushrooms"
          element={<MushroomCardPage mushroomList={mushroomList} />}
        />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </div>
  );
}

export default App;
