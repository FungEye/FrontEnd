import { useState } from "react";
import MushroomCard from "./MushroomCard";

function MushroomCardPage(props) {

    let mushroomList = props.mushroomList;
    const shroomcards = mushroomList.map(x => <MushroomCard mushroom={x} key={x.shroomname} />)
    

}

