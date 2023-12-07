export type Race = {
    time: number,
    distance: number
}

export const parseRaces = (raceText : string) : Race[] => {

    let races = []

    let timesMatch = raceText.match(/Time:\s*((?:\d+\s*)+)/)
    let times = timesMatch ? timesMatch[1].trim().split(/\s+/).map(Number) : []
    
    let distanceMatch = raceText.match(/Distance:\s*((?:\d+\s*)+)/)
    let distances = distanceMatch ? distanceMatch[1].trim().split(/\s+/).map(Number) : []

    for (let i = 0; i < times.length; i++)
    {
        races.push({
            time: times[i],
            distance: distances[i],
        })
    }

    return races
}

export const calculateNumberOfWaysToWinMultiplied = (races : Race[]) : number => {
    let result = 1

    races.forEach((race) => {
        let frontSpeed = 1
        let backSpeed = race.time - 1
        let frontDistance = 0
        let backDistance = 0
        let distanceToBeat = race.distance
        let totalTime = race.time

        while (frontDistance <= distanceToBeat && backDistance <= distanceToBeat && frontSpeed < backSpeed)
        {
            frontDistance = frontSpeed * (totalTime - frontSpeed)
            backDistance = backSpeed * (totalTime - backSpeed)
            frontSpeed ++
            backSpeed --
        }

        const numberOfWays = (backSpeed + 1) - (frontSpeed - 1) + 1

        result = result * numberOfWays
    })
    
    return result
}