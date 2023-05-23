
function fromPhasesToStats(conditionsInPhases) {
    const spawnRun = conditionsInPhases.find(c => c.developmentStage === "spawn run");
    const pinning = conditionsInPhases.find(c => c.developmentStage === "pinning");
    const fruiting = conditionsInPhases.find(c => c.developmentStage === "fruiting");
    return {
        temperature: [
            {
              phase: "spawn run",
              temperature: [spawnRun.tempLow, spawnRun.tempHigh],
            },
            {
              phase: "pinning",
              temperature: [pinning.tempLow, pinning.tempHigh],
            },
            {
              phase: "fruiting",
              temperature: [fruiting.tempLow, fruiting.tempHigh],
            },
          ],
          humidity: [
            {
              phase: "spawn run",
              humidity: [spawnRun.humidityLow, spawnRun.humidityHigh],
            },
            {
              phase: "pinning",
              humidity: [pinning.humidityLow, pinning.humidityHigh],
            },
            {
              phase: "fruiting",
              humidity: [fruiting.humidityLow, fruiting.humidityHigh],
            },
          ],
          co2: [
            {
              phase: "spawn run",
              co2: [spawnRun.co2Low, fruiting.co2High],
            },
            {
              phase: "pinning",
              co2: [pinning.co2Low, pinning.co2High],
            },
            {
              phase: "fruiting",
              co2: [fruiting.co2Low, fruiting.co2High],
            },
          ],
          light: [
            {
              phase: "spawn run",
              light: [spawnRun.lightLow, spawnRun.lightHigh],
            },
            {
              phase: "pinning",
              light: [pinning.lightLow, pinning.lightHigh],
            },
            {
              phase: "fruiting",
              light: [fruiting.lightLow, fruiting.lightHigh],
            },
          ],
        };
    }


export {fromPhasesToStats}