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
function App() {
  const isAuthenticated = useIsAuthenticated();
  let oyster = {
    id: 1,
    shroomname: "Oyster",
    imgsrc:
      "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImIwNTMzOTI0Njk2ZGJlOTIzZTUyMDdlYWEyMjM5NGY3LmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=7bb476fd5c2f284f475942393f2edca779877dd2fb10e2574b78ae751080535c",
    origin: "Cuba",
    description:
      "This mushroom is picked by putinhas very often in Connecticut.",
    conditions: null,
  };

  let enoki = {
    id: 2,
    shroomname: "Enoki",
    imgsrc: "https://myspork.files.wordpress.com/2010/05/enoki.gif",
  };

  let reishi = {
    id: 3,
    shroomname: "Reishi",
    imgsrc:
      "https://www.mandalanaturals.com/wp-content/uploads/2019/03/reishi.png",
  };

  let shiitake = {
    id: 4,
    shroomname: "Shiitake",
    imgsrc:
      "https://sitioaborigene.com.br/wp-content/uploads/2021/07/shiitake.png",
  };

  let wine_cap = {
    id: 5,
    shroomname: "Wine Cap",
    imgsrc:
      "https://static.wixstatic.com/media/5e418a_500c96a24f394a1b879a246ba869f9e7~mv2.gif",
  };

  let pioppino = {
    id: 6,
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

  // let grow1 = {
  //   status: "Good",
  //   mushroom: {
  //     shroomname: "Oyster",
  //     imgurl: "https://cdn-icons-png.flaticon.com/512/2069/2069395.png",
  //     lastMeasured: {
  //       day: 11,
  //       month: 5,
  //       year: 2023,
  //       hour: 9,
  //       minute: 30,
  //     },
  //   },
  // };

  // let element = <h1>Big lol</h1>;

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
          element={<MushroomCardPage mushroomList={mushroomList} />}
        />
        <Route path="/yields" element={<YieldPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/overview" element={<OverviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
