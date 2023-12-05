import { parseTextFileIntoLines } from "../src/util";
import { parseGame, Game, sumIdsOfPossibleGames, DEFAULT_GAME_LIMITS } from "../src/day2";

describe("Day 1 tests" , () => {
    it("should return the correct sum of game ids for the test data", () => {
        const inputData = parseTextFileIntoLines('day2Text.txt')
        const sum = sumIdsOfPossibleGames(DEFAULT_GAME_LIMITS, inputData)
        expect(sum).toEqual(8)
    })

    it("should parse the game line correctly", () => {
        const game : Game = parseGame("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")
        expect(game.id).toEqual(1)
        expect(game.maxRed).toEqual(4)
        expect(game.maxGreen).toEqual(2)
        expect(game.maxBlue).toEqual(6)
    })
})