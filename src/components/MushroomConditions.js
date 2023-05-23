import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts"
import "./css/MushroomConditions.css"



function MushroomConditions(props) {

    let data = props.conditions;
    let title;
    let min;
    let max;
    let type = props.type;

    switch (type) {
        case "temperature":
            title = "Temperature (ºC)";
            min = "dataMin-2";
            max = "dataMax+2";
            break;
        case "humidity":
            title = "Humidity (%)"
            min="dataMin-2";
            break;
        case "co2":
            title = "CO2 (ppm)"
            min = "dataMin-100";
            max = "dataMax+100";
            break;
        case "light":
            console.log(data)
            title = "Light (lux)"
            break;
        default:
            break;
    }
    
    return (
        <div>
            <div className="conditions-title text-dark"><b>{title}</b></div>
            <BarChart barSize={40} width={400} height={250} data={data} margin={{ top: 20, right: 20, bottom: 10, left: 0 }} className="barchart">
                <CartesianGrid strokeDasharray="8" stroke="#d1905e"/>
                <XAxis dataKey="phase" />
                <YAxis tickCount={10} type="number" domain={[min, max]} />
                <Tooltip />
                <Bar dataKey={type} fill="#d1905e" />
            </BarChart>
        </div>

    )
}

export default MushroomConditions