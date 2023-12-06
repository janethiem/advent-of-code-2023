import { calculateLowestLocationNumberFromSeeds, createAlmanac } from "../src/day5"
import { parseTextFileIntoString } from "../src/util"

describe("Day 5, Part 1 Tests" , () => {

    it("should create the almanac correctly", () => {
        const data = parseTextFileIntoString('day5Test.txt')
        const almanac = createAlmanac(data)
        expect(almanac.seeds).toEqual([79, 14, 55, 13])
        expect(almanac.almanacEntries[2][1].destinationRangeStart).toEqual(0)
        expect(almanac.almanacEntries[2][1].sourceRangeStart).toEqual(11)
        expect(almanac.almanacEntries[2][1].rangeLength).toEqual(42)
    })

    it("should calculate the lowest location number", () => {
        const data = parseTextFileIntoString('day5Test.txt')
        const almanac = createAlmanac(data)
        const lowestLocationNumber = calculateLowestLocationNumberFromSeeds(almanac)
        expect(lowestLocationNumber).toEqual(35)
    })
})

describe("Day 5, Part 2 Tests" , () => {

})