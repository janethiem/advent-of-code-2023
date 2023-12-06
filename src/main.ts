import * as fs from 'fs'
import { sumCalibrationValuesDigitsOnly, sumCalibrationValuesMixOfDigitsAndStrings } from './day1';
import { parseTextFileIntoGrid, parseTextFileIntoLines } from './util'
import { DEFAULT_GAME_LIMITS, sumIdsOfPossibleGames, sumOfPowerOfEveryGame } from './day2';
import { sumOfGearRatios, sumOfPartNumbers } from './day3';
import { sumCardPoints } from './day4';

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

    const day3Input = parseTextFileIntoGrid('day3Input.txt')

    const day3Part1Answer = sumOfPartNumbers(day3Input)
    console.log('Day 3, Part 1 Answer: ', day3Part1Answer)

    const day3Part2Answer = sumOfGearRatios(day3Input)
    console.log('Day 3, Part 2 Answer: ', day3Part2Answer)

    const day4Input = parseTextFileIntoLines('day4Input.txt')
    const day4Part1Answer = sumCardPoints(day4Input)
    console.log('Day 4, Part 1 Answer: ', day4Part1Answer)
}

main();