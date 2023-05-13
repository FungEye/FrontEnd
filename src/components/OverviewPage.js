import Collapsible from "./Collapsible";
import OPActiveGrow from "./OPActiveGrow";

function OverviewPage() {

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

    let growList = [grow1, grow2];

    let grows = growList.map(x => <OPActiveGrow grow={x} />)

    let collapsibleWidth = 450;


    return (<div className="op-container bg-light rounded-20 column align-items-center">
        <div className="op-title ultra text-dark">Overview</div>
        <Collapsible width={collapsibleWidth} text="Active Grows" content={
            <div id="op-active-grows" className="collapsible column">
                {grows}
            </div>} />
        <Collapsible width={collapsibleWidth} text="Free Boxes" noScript ={true} content={
            <div>
                lol
            </div>
        } />

    </div>)
}

export default OverviewPage;