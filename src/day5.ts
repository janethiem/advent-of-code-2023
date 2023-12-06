
export type AlmanacEntry = {
    destinationRangeStart: number
    sourceRangeStart: number
    rangeLength: number
}

export type Almanac = {
    seeds: number[]
    almanacEntries: AlmanacEntry[][]
}

export const createAlmanac = (almanacText : string) : Almanac => {
    let almanac : Almanac = {
        seeds: [],
        almanacEntries: []
    }

    let match = almanacText.match(/seeds: (\d+(?: \d+)*)/);
    if (match) {
        almanac.seeds = match[1].split(' ').map(Number);
    }

    let mapParts = almanacText.split('map:\n')
    mapParts.shift()
    mapParts.forEach((part) => {
        let almanacEntryText = part.split('\n')
        let almanacEntries : AlmanacEntry[] = []
        almanacEntryText.forEach((entryText) => {
            let match = entryText.match((/(\d+) (\d+) (\d+)/g))
            if (match)
            {
                let numbers = match.flatMap(line => line.split(' ').map(Number))
                let almanacEntry : AlmanacEntry = {
                    destinationRangeStart: numbers[0],
                    sourceRangeStart: numbers[1], 
                    rangeLength: numbers[2],
                }
                almanacEntries.push(almanacEntry)
            }
        })
        almanac.almanacEntries.push(almanacEntries)
    })

    return almanac
}

export const calculateLowestLocationNumberFromSeeds = (almanac) : number => {
    let lowestLocationNumber = Number.MAX_VALUE

    almanac.seeds.forEach((seed) => {
        let sourceNumber = seed
        almanac.almanacEntries.forEach((conversionMap : AlmanacEntry[])=> {
            let destinationNumber = null
            conversionMap.forEach((almanacEntry : AlmanacEntry) => {
                if (sourceNumber >= almanacEntry.sourceRangeStart && sourceNumber <= almanacEntry.sourceRangeStart + almanacEntry.rangeLength)
                {
                    let offset = sourceNumber - almanacEntry.sourceRangeStart
                    destinationNumber = almanacEntry.destinationRangeStart + offset
                }
            })

            if (!destinationNumber)
            {
                destinationNumber = sourceNumber
            }

            sourceNumber = destinationNumber
        })
        lowestLocationNumber = sourceNumber < lowestLocationNumber ? sourceNumber : lowestLocationNumber
    })

    return lowestLocationNumber
}