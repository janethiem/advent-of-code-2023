import { sumOfGearRatios, sumOfPartNumbers } from "../src/day3";
import { parseTextFileIntoGrid } from "../src/util";

describe("Day 3, Part 1 Tests" , () => {
    it("should return the correct sum of part numbers for the test data", () => {
        const data = parseTextFileIntoGrid('day3Test.txt')
        const sum = sumOfPartNumbers(data)
        expect(sum).toEqual(4361)
    })
})

describe("Day 3, Part 2 Tests" , () => {
    it("should return the correct sum of gear ratios for the test data", () => {
        const data = parseTextFileIntoGrid('day3Test.txt')
        const sum = sumOfGearRatios(data)
        expect(sum).toEqual(467835)
    })
})
