import { sumOfPartNumbers } from "../src/day3";
import { parseTextFileIntoGrid } from "../src/util";

describe("Day 2, part 1 tests" , () => {
    it("should return the correct sum of game ids for the test data", () => {
        const data = parseTextFileIntoGrid('day3Test.txt')
        const sum = sumOfPartNumbers(data)
        expect(sum).toEqual(4361)
    })
})