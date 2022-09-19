const northCPM = 5
const eastCPM = 5
const southCPM = 5
const westCPM = 4

// const totalCPM = northCPM + eastCPM + southCPM + westCPM
const totalCPM = 1

const roundaboutEfficiency = () => {
    let efficiencyScore
    if (totalCPM >= 20) {
        efficiencyScore = 100 * .5
        console.log(`Roundabout Efficiency is a ${efficiencyScore} with a CPM of ${totalCPM}`)
    } else if (totalCPM < 20 && totalCPM >= 10) {
        efficiencyScore = 100 * .75
        console.log(`Roundabout Efficiency is a ${efficiencyScore} with a CPM of ${totalCPM}`)
    } else {
        efficiencyScore = 100 * .9
        console.log(`Roundabout Efficiency is a ${efficiencyScore} with a CPM of ${totalCPM}`)
    }
}
const stopsignEfficiency = () => {
    let efficiencyScore
    if (totalCPM >= 20) {
        efficiencyScore = 100 * .2
        console.log(`Stop Sign Efficiency is a ${efficiencyScore} with a CPM of ${totalCPM}`)
    } else if (totalCPM < 20 && totalCPM >= 10) {
        efficiencyScore = 100 * .3
        console.log(`Stop Sign Efficiency is a ${efficiencyScore} with a CPM of ${totalCPM}`)
    } else {
        efficiencyScore = 100 * .4
        console.log(`Stop Sign Efficiency is a ${efficiencyScore} with a CPM of ${totalCPM}`)
    }
}
const trafficlightEfficiency = () => {
    let efficiencyScore
    if (totalCPM >= 20) {
        efficiencyScore = 100 * .9
        console.log(`Traffic Light Efficiency is a ${efficiencyScore} with a CPM of ${totalCPM}`)
    } else if (totalCPM < 20 && totalCPM >= 10) {
        efficiencyScore = 100 * .75
        console.log(`Traffic Light Efficiency is a ${efficiencyScore} with a CPM of ${totalCPM}`)
    } else {
        efficiencyScore = 100 * .3
        console.log(`Traffic Light Efficiency is a ${efficiencyScore} with a CPM of ${totalCPM}`)
    }
}

roundaboutEfficiency()
stopsignEfficiency()
trafficlightEfficiency()