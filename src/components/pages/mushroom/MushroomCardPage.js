import { useState } from "react";
import MushroomCard from "./MushroomCard";
import MushroomDetailsModal from "./MushroomDetailsModal";
import "./MushroomCardPage.css";

function MushroomCardPage(props) {
  let mushroomList = props.mushroomList;
  const [show, setShow] = useState(false);

  const [mushroom, setMushroom] = useState(null);
  console.log(mushroomList);
  const shroomcards = mushroomList.map((x) => (
    <MushroomCard
      mushroom={x}
      showDetails={() => {
        setMushroom(x);
        setShow(true);
      }}
      key={x.shroomname}
    />
  ));

  return (
    <div className="column mushroom-page gap-20">
      <div className="start-grow-info text-light poppins">
        Pick a mushroom species to start a grow.
      </div>
      <div className="mushroom-cards">{shroomcards}</div>
      <MushroomDetailsModal show={show} setShow={setShow} mushroom={mushroom} />
    </div>
  );
}

export default MushroomCardPage;
