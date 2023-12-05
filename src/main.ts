import * as fs from 'fs'
import { sumCalibrationValuesDigitsOnly, sumCalibrationValuesMixOfDigitsAndStrings } from './day1';
import { parseTextFileIntoLines } from './util'
import { DEFAULT_GAME_LIMITS, sumIdsOfPossibleGames, sumOfPowerOfEveryGame } from './day2';

function main(): void
{
    const day1Input = fs.readFileSync('test/fixtures/day1Input.txt', 'utf8')

    const day1Part1Answer = sumCalibrationValuesDigitsOnly(day1Input)
    console.log('Day 1, Part 1 Answer: ', day1Part1Answer)

    const day1Part2Answer = sumCalibrationValuesMixOfDigitsAndStrings(day1Input)
    console.log('Day 1, Part 2 Answer: ', day1Part2Answer)

    const day2Input = parseTextFileIntoLines('day2Input.txt')

    const day2Answer = sumIdsOfPossibleGames(DEFAULT_GAME_LIMITS, day2Input)
    console.log('Day 2, Part 1 Answer: ', day2Answer)

    const day2Part2Answer = sumOfPowerOfEveryGame(day2Input)
    console.log('Day 2, Part 2 Answer: ', day2Part2Answer)
}

main();