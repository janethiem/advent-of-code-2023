import { calculateLowestLocationNumberFromSeedList, calculateLowestLocationNumberWithSeedRanges, createAlmanac } from "../src/day5"
import { parseTextFileIntoString } from "../src/util"

describe("Day 5, Part 1 Tests" , () => {

    it("should create the almanac correctly", () => {
        const data = parseTextFileIntoString('day5Test.txt')
        const almanac = createAlmanac(data)
        expect(almanac.conversionMaps[2][1].destinationRangeStart).toEqual(0)
        expect(almanac.conversionMaps[2][1].sourceRangeStart).toEqual(11)
        expect(almanac.conversionMaps[2][1].rangeLength).toEqual(42)
    })

    it("should calculate the lowest location number", () => {
        const data = parseTextFileIntoString('day5Test.txt')
        const lowestLocationNumber = calculateLowestLocationNumberFromSeedList(data)
        expect(lowestLocationNumber).toEqual(35)
    })
})

describe("Day 5, Part 2 Tests" , () => {
    it("should calculate the lowest location number with seed ranges", () => {
        const data = parseTextFileIntoString('day5Test.txt')
        const lowestLocationNumber = calculateLowestLocationNumberWithSeedRanges(data)
        expect(lowestLocationNumber).toEqual(46)
    })
})