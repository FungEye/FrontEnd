import { useEffect, useState } from "react";
import MushroomCard from "./MushroomCard";
import MushroomDetailsModal from "./MushroomDetailsModal";
import { useCallback } from "react";
import { getMushrooms } from "../util/Fetcher";
import "./css/MushroomCardPage.css";
import { useAuthHeader } from "react-auth-kit";


function MushroomCardPage() {
    

    const [mushrooms, setMushrooms] = useState(null);
    const [show, setShow] = useState(false);
    const [mushroomOnModal, setMushroomOnModal] = useState(null);
    const authHeader = useAuthHeader();

    useEffect(() => {
        async function getData() {
            const shrooms = await getMushrooms(authHeader());
            setMushrooms([...shrooms]);
            console.log(shrooms);
        }
        await getData();
    }, []);




    return (
        <div className="column mushroom-page gap-20">
            {!mushrooms ? (
                <div className="column pt-15 text-light poppins">
                    Loading...
                </div>
            ) :
                <div>
                    <div className="start-grow-info text-light poppins">Pick a mushroom species to start a grow.</div>
                    <div className="mushroom-cards">
                        {mushrooms.map(x => <MushroomCard mushroom={x} showDetails={() => { setMushroomOnModal(x); setShow(true) }} key={x.name} />)}
                    </div>
                </div>
            }

            <MushroomDetailsModal show={show} setShow={setShow} mushroom={mushroomOnModal} />
        </div>

    )

}

export default MushroomCardPage

