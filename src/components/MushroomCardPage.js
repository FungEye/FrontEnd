import { useState } from "react";
import MushroomCard from "./MushroomCard";
import MushroomDetailsModal from "./MushroomDetailsModal";
import "./css/MushroomCardPage.css";


function MushroomCardPage(props) {

    let mushroomList = props.mushroomList;
    const [show, setShow] = useState(false);

  let oyster = {
    "shroomname": "Oyster",
    "imgsrc": "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImIwNTMzOTI0Njk2ZGJlOTIzZTUyMDdlYWEyMjM5NGY3LmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=7bb476fd5c2f284f475942393f2edca779877dd2fb10e2574b78ae751080535c",
    "origin": "Cuba",
    "description": "This mushroom is picked by putinhas very often in Connecticut."
  }

    const [mushroom, setMushroom] = useState(oyster);
    console.log(mushroomList);
    const shroomcards = mushroomList.map(x => <MushroomCard mushroom={x} showDetails={() => {setMushroom(x); setShow(true)}} key={x.shroomname} />)

    return(
        <div className="mushroom-cards">
            {shroomcards}
            <MushroomDetailsModal show={show} setShow={setShow} mushroom={mushroom}/>
        </div>
    )
    
}

export default MushroomCardPage

