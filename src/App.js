import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ChooseBox from "./components/ChooseBox";
import Dashboard from "./components/Dashboard";
import MushroomCardPage from "./components/MushroomCardPage";


function App() {

  let oyster = {
    "shroomname": "Oyster",
    "imgsrc": "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImIwNTMzOTI0Njk2ZGJlOTIzZTUyMDdlYWEyMjM5NGY3LmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=7bb476fd5c2f284f475942393f2edca779877dd2fb10e2574b78ae751080535c",
    "origin": "Cuba",
    "description": "This mushroom is picked by putinhas very often in Connecticut.",
    "conditions" : null
  }

  let enoki = {
    "shroomname": "Enoki",
    "imgsrc": "https://myspork.files.wordpress.com/2010/05/enoki.gif"
  }

  let reishi = {
    "shroomname": "Reishi",
    "imgsrc": "https://www.mandalanaturals.com/wp-content/uploads/2019/03/reishi.png"
  }

  let shiitake = {
    "shroomname": "Shiitake",
    "imgsrc": "https://sitioaborigene.com.br/wp-content/uploads/2021/07/shiitake.png"
  }

  let wine_cap = {
    "shroomname": "Wine Cap",
    "imgsrc": "https://static.wixstatic.com/media/5e418a_500c96a24f394a1b879a246ba869f9e7~mv2.gif"
  }

  let pioppino = {
    "shroomname": "Pioppino",
    "imgsrc": "https://static.vecteezy.com/system/resources/thumbnails/009/974/113/small_2x/isolated-enoki-mushroom-cutout-on-white-background-free-png.png"
  }


  

  let mushroomList = [oyster, enoki, reishi, shiitake, wine_cap, pioppino]

  return (
    <div className="App">
      <Routes>
        <Route path="/FrontEnd/chooseBox" element={<ChooseBox />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shroomcard" element={<MushroomCardPage mushroomList={mushroomList} />} />

      </Routes>
    </div>
  );
}



export default App;
