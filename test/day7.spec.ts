import { calculateTotalWinnings, parseHands } from "../src/day7"
import { parseTextFileIntoLines } from "../src/util"

describe("Day 7, Part 1 Tests" , () => {

    it("should parse the hands correctly", () => {
        const data = parseTextFileIntoLines('day7Test.txt')
        const hands = parseHands(data)
        expect(hands[1].hand).toEqual("KTJJT")
        expect(hands[4].bid).toEqual(483)
    })

    it("should calculate the total winnings correctly", () => {
        const data = parseTextFileIntoLines('day7Test.txt')
        const hands = parseHands(data)
        const totalWinnings = calculateTotalWinnings(hands)
        expect(totalWinnings).toEqual(6440)
    })
})

// describe("Day 7, Part 2 Tests" , () => {

//     it("should parse the race correctly", () => {
//         const data = parseTextFileIntoString('day6Test.txt')
//     })

//     it("should return the calculate the number of ways to win for the test data", () => {
//         const data = parseTextFileIntoString('day6Test.txt')
//     })
// })