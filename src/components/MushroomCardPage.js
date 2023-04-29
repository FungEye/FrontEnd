import { useState } from "react";
import MushroomCard from "./MushroomCard";
import MushroomDetailsModal from "./MushroomDetailsModal";
import "./css/MushroomCardPage.css";


function MushroomCardPage(props) {

    let mushroomList = props.mushroomList;
    const [show, setShow] = useState(false);

    const [mushroom, setMushroom] = useState(null);
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

