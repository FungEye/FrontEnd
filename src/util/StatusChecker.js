async function checkMeasurementStatus(idealConditions, latestMeasurement, phase) {

    let offCount = 0;
    let idCon;

    let lastTemp = latestMeasurement.temperature;
    let lastHumidity = latestMeasurement.humidity;
    let lastCo2 = latestMeasurement.co2;
    let lastLight = latestMeasurement.light;

    switch (phase) {
        case "spawn run":
            idCon = idealConditions[2]
            break;
        case "pinning":
            idCon = idealConditions[0]
            break;
        case "fruiting":
            idCon = idealConditions[1]
            break;
    }

    if (!(idCon.tempLow <= lastTemp && idCon.tempHigh >= lastTemp)) {
        offCount++;
    }
    if (!(idCon.humidityLow <= lastHumidity && idCon.humidityHigh >= lastHumidity)) {
        offCount++;
    }
    if (!(idCon.co2Low <= lastCo2 && idCon.co2High >= lastCo2)) {
        offCount++;
    }
    if (!(idCon.lightLow <= lastLight && idCon.lightHigh >= lastLight)) {
        offCount++;
    }

    switch (offCount) {
        case 0:
            return "Good";
        case 1:
            return "Concerning";
        default:
            return "Alarming";
    }

}

export { checkMeasurementStatus }