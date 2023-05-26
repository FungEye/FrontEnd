const urls = {
    deployed: "https://frontend-j2d45t66ga-lz.a.run.app/#",
    local: "http://localhost:3000/#"
}

const testMushroom = {
    "name": "Test Shroom",
    "description": "This mushroom exists only for test purposes, and if you, as a user, have found it, please report it to the development team.",
    "origin": "Testers' laptops",
    "idealConditionCreationDtos": [
        {
            "developmentStage": "spawn run",
            "tempHigh": "23",
            "tempLow": "20",
            "humidityHigh": "50",
            "humidityLow": "30",
            "co2High": "800",
            "co2Low": "600",
            "lightHigh": "400",
            "lightLow": "300"
        },
        {
            "developmentStage": "pinning",
            "tempHigh": "20",
            "tempLow": "16",
            "humidityHigh": "70",
            "humidityLow": "50",
            "co2High": "700",
            "co2Low": "500",
            "lightHigh": "300",
            "lightLow": "200"
        },
        {
            "developmentStage": "fruiting",
            "tempHigh": "26",
            "tempLow": "20",
            "humidityHigh": "55",
            "humidityLow": "40",
            "co2High": "1200",
            "co2Low": "1000",
            "lightHigh": "12000",
            "lightLow": "10000"
        }
    ],
    "username": "admin",
    "imageUrl": "https://i.pinimg.com/originals/87/3a/49/873a498480d4b2f4b7886f17a75f1d61.jpg"
}

export {urls, testMushroom}