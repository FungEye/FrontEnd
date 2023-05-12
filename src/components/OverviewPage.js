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


    return (<div className="op-container bg-light rounded-20 column">
        <div className="op-title ultra text-dark">Overview</div>
        <div id="op-active-grows" className="collapsible column ">
            <div className="op-ag-title text-dark varela">Active Grows</div>
            <OPActiveGrow grow={grow1}/>
            <OPActiveGrow grow={grow2}/>
        </div>
    </div>)
}

export default OverviewPage;