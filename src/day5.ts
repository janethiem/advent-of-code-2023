
export type AlmanacEntry = {
    destinationRangeStart: number
    sourceRangeStart: number
    rangeLength: number
}

export type Almanac = {
    conversionMaps: AlmanacEntry[][]
}

export const calculateLowestLocationNumberFromSeedList = (almanacText : string) : number => {
    let lowestLocationNumber = Number.MAX_VALUE
    let seeds = []
    let match = almanacText.match(/seeds: (\d+(?: \d+)*)/);
    if (match) {
        seeds = match[1].split(' ').map(Number)
    }

    const almanac = createAlmanac(almanacText)
    seeds.forEach((seed) => {
        const locationNumber = calculateLocationNumber(almanac, seed)
        lowestLocationNumber = locationNumber < lowestLocationNumber ? locationNumber : lowestLocationNumber
    })
    
    return lowestLocationNumber
}

export const calculateLowestLocationNumberWithSeedRanges = (almanacText : string) : number => {
    let lowestLocationNumber = Number.MAX_VALUE
    let match = almanacText.match(/seeds: (\d+(?: \d+)*)/);
    if (match) {
        const almanac = createAlmanac(almanacText)
        let seedNumbers = match[1].split(' ').map(Number)
        for(let i = 0; i < seedNumbers.length; i = i + 2)
        {
            let start = seedNumbers[i]
            let range = seedNumbers[i+1]
            for (let j = start; j < start + range; j++) {
                const locationNumber = calculateLocationNumber(almanac, j)
                lowestLocationNumber = locationNumber < lowestLocationNumber ? locationNumber : lowestLocationNumber
            }

        }
    }
    return lowestLocationNumber
}

export const createAlmanac = (almanacText : string) : Almanac => {
    let almanac : Almanac = {
        conversionMaps: []
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
        almanac.conversionMaps.push(almanacEntries)
    })

    return almanac
}

export const calculateLocationNumber = (almanac, seed) : number => {
    //let lowestLocationNumber = Number.MAX_VALUE

        let sourceNumber = seed
        almanac.conversionMaps.forEach((conversionMap : AlmanacEntry[])=> {
            let destinationNumber = null
            conversionMap.forEach((almanacEntry : AlmanacEntry) => {
                if (sourceNumber >= almanacEntry.sourceRangeStart && sourceNumber < almanacEntry.sourceRangeStart + almanacEntry.rangeLength)
                {
                    
                    let offset = sourceNumber - almanacEntry.sourceRangeStart
                    destinationNumber = almanacEntry.destinationRangeStart + offset
                }
            })

            if (destinationNumber === null)
            {
                destinationNumber = sourceNumber
            }

            sourceNumber = destinationNumber
        })
//         lowestLocationNumber = sourceNumber < lowestLocationNumber ? sourceNumber : lowestLocationNumber

//     return lowestLocationNumber

        return sourceNumber
    }

