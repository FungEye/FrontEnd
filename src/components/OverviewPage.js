import Collapsible from "./Collapsible";
import OPActiveGrow from "./OPActiveGrow";
import { useNavigate } from "react-router-dom";
import useScript from "../hooks/useScript";
import OverviewBox from "./OverviewBox";

function OverviewPage() {

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
            lastMeasured: {
                day: 11,
                month: 5,
                year: 2023,
                hour: 9,
                minute: 30
            }
        }
    }
    let grow2 = {
        status: "Alarming",
        mushroom: {
            shroomname: "Shiitake",
            imgurl: "https://cdn-icons-png.flaticon.com/512/2069/2069395.png",
            lastMeasured: {
                day: 11,
                month: 5,
                year: 2023,
                hour: 11,
                minute: 29
            }
        }
    }

    let box1 = {
        id: 1,
        shroomgrowing: "Portobello"
    }

    let box2 = {
        id: 2
    }

    let boxes = [box1, box2];

    let boxList = boxes.map(x => <OverviewBox boxId={x.id} shroomgrowing={x.shroomgrowing}/>)

    const navigate = useNavigate();

    const goToYields = () => {
        navigate("/yields");
    }

    let growList = [grow1, grow2];

    let grows = growList.map(x => <OPActiveGrow grow={x} />)

    let collapsibleWidth = 450;


    return (<div className="op-container bg-light rounded-20 column align-items-center very-slightly-faded">
        <div className="op-title ultra text-dark">Overview</div>
        <Collapsible id="active-grows" width={collapsibleWidth} text="Active Grows" content={
            <div id="op-active-grows" className="column">
                {grows}
            </div>} />
        <Collapsible width={collapsibleWidth} text="Your Boxes" content={
            <div className="op-free-boxes column inside-collapsible">
                {boxList}
            </div>
        } />
        <Collapsible width={collapsibleWidth} text="Past Yields" content={
            <div className="inside-collapsible">
                To see your yields, go to your <a style={{cursor: "pointer", "text-decoration": "underline"}}onClick={goToYields}>Yields</a> page.
            </div>
        } />

    </div>)
}

export default OverviewPage;