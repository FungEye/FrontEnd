import Collapsible from "./Collapsible";
import OPActiveGrow from "./OPActiveGrow";
import { useNavigate } from "react-router-dom";
import useScript from "../hooks/useScript";
import OverviewBox from "./OverviewBox";
import ButtonPrimary from "./ButtonPrimary";

function OverviewPage(props) {

    useScript(`
      var coll = document.getElementsByClassName("collapse-container");
    var i;

    for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
        let scrollheight = content.scrollHeight + 40;
      content.style.maxHeight = scrollheight + "px";
    } 
  });
  
  document.getElementById("active-grows").click();

}`)


    let grow1 = {
        status: "Good",
        mushroom: {
            shroomname: "Oyster",
            imgurl: "https://cdn-icons-png.flaticon.com/512/2069/2069395.png",

        },
        lastMeasured: {
            day: 11,
            month: 5,
            year: 2023,
            hour: 9,
            minute: 30
        }
    }
    let grow2 = {
        status: "Alarming",
        mushroom: {
            shroomname: "Shiitake",
            imgurl: "https://cdn-icons-png.flaticon.com/512/2069/2069395.png",

        },
        lastMeasured: {
            day: 11,
            month: 5,
            year: 2023,
            hour: 11,
            minute: 29
        }
    }

    let box1 = {
        id: 1,
        shroomgrowing: "Portobello"
    }

    let box2 = {
        id: 2
    }

    

    //TODO add functionality for setting up a box when Robert has fixed his modal
    const setUpBox = () => {};

    const navigate = useNavigate();

    const goToYields = () => {
        navigate("/yields");
    }

    const goToMushrooms = () => {
        navigate("/mushrooms")
    }

    //TODO replace with actual grows that are fetched!
    let grows;
    if (props.emptyGrows) {
        grows = [];
    }
    else {
        grows = [grow1, grow2];
    }
    let growList;

    if (grows.length > 0) {
        growList = grows.map(x => <OPActiveGrow grow={x} />)
    }
    else {
        growList = (<div className="column align-items-center gap-10">
            <div className="op-info-value"> You have no Active Grows yet!</div>
            <ButtonPrimary text="Start Grow" onClick={() => goToMushrooms()} />
        </div>)

    }

    //TODO replace with actual boxes!
    let boxes;
    if (props.emptyBoxes) {
        boxes = [];
    }
    else {
        boxes = [box1, box2]
    }
    let boxList;

    if (boxes.length > 0) {
        boxList = boxes.map(x => <OverviewBox boxId={x.id} shroomgrowing={x.shroomgrowing} />)
    }
    else {
        boxList = (<div className="column align-items-center gap-10">
            <div className="op-info-value"> You have no Boxes yet!</div>
            <ButtonPrimary text="Set Up Box" />
        </div>)
    }


    let collapsibleWidth = 450;


    return (<div className="op-container bg-light rounded-20 column align-items-center very-slightly-faded">
        <div className="op-title ultra text-dark">Overview</div>
        <Collapsible id="active-grows" width={collapsibleWidth} text="Active Grows" content={
            <div id="op-active-grows" className="column">
                {growList}
            </div>} />
        <Collapsible id="your-boxes" width={collapsibleWidth} text="Your Boxes" content={
            <div className="op-free-boxes column inside-collapsible">
                {boxList}
            </div>
        } />
        <Collapsible id="past-yields" width={collapsibleWidth} text="Past Yields" content={
            <div className="inside-collapsible">
                To see your yields, go to your <a style={{ cursor: "pointer", "textDecoration": "underline" }} onClick={goToYields}>Yields</a> page.
            </div>
        } />

    </div>)
}

export default OverviewPage;