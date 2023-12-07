import { calculateNumberOfWaysToWinMultiplied, parseRaces } from "../src/day6"
import { parseTextFileIntoString } from "../src/util"

describe("Day 6, Part 1 Tests" , () => {

    it("should parse the race correctly", () => {
        const data = parseTextFileIntoString('day6Test.txt')
        const races = parseRaces(data)
        expect(races[1].time).toEqual(15)
        expect(races[1].distance).toEqual(40)
    })

    it("should return the calculate the number of ways to win for the test data", () => {
        const data = parseTextFileIntoString('day6Test.txt')
        const races = parseRaces(data)
        const numberOfWays = calculateNumberOfWaysToWinMultiplied(races)
        expect(numberOfWays).toEqual(288)
    })
})

describe("Day 6, Part 2 Tests" , () => {

    // it("should return the correct number of scratchcards for the test data", () => {
    //     const data = parseTextFileIntoLines('day4Test.txt')
    //     const sum = sumScratchCards(data)
    //     expect(sum).toEqual(30)
    // })
})