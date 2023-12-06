import { parseTextFileIntoLines } from "../src/util"
import { parseCard, Card, sumCardPoints } from "../src/day4"

describe("Day 4, Part 1 Tests" , () => {

    it("should parse the card correctly", () => {
        const card : Card = parseCard("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53")
        expect(card.winningNumbers).toEqual([41, 48, 83, 86, 17])
        expect(card.numbersYouHave).toEqual([83, 86, 6, 31, 17, 9, 48, 53])
    })

    it("should return the correct sum of part numbers for the test data", () => {
        const data = parseTextFileIntoLines('day4Test.txt')
        const sum = sumCardPoints(data)
        expect(sum).toEqual(13)
    })
})