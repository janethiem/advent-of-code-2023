import * as fs from 'fs'
import { sumCalibrationValuesDigitsOnly, sumCalibrationValuesMixOfDigitsAndStrings } from './day1';
import { parseTextFileIntoGrid, parseTextFileIntoLines, parseTextFileIntoString } from './util'
import { DEFAULT_GAME_LIMITS, sumIdsOfPossibleGames, sumOfPowerOfEveryGame } from './day2';
import { sumOfGearRatios, sumOfPartNumbers } from './day3';
import { sumCardPoints, sumScratchCards } from './day4';
import { calculateNumberOfWaysToWinMultiplied, parseRaces } from './day6';
//import { calculateLowestLocationNumberFromSeedList, calculateLowestLocationNumberWithSeedRanges } from "../src/day5"

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

    const day4Part2Answer = sumScratchCards(day4Input)
    console.log('Day 4, Part 2 Answer: ', day4Part2Answer)

    // const day5Input = parseTextFileIntoString('day5Input.txt')

    // const day5Part1Answer = calculateLowestLocationNumberFromSeedList(day5Input)
    // console.log('Day 5, Part 1 Answer: ', day5Part1Answer)

    // const day5Part2Answer = calculateLowestLocationNumberWithSeedRanges(day5Input)
    // console.log('Day 5, Part 2 Answer: ', day5Part2Answer)

    const day6Input = parseRaces(parseTextFileIntoString('day6Input.txt'))

    const day6Part1Answer = calculateNumberOfWaysToWinMultiplied(day6Input)
    console.log('Day 6, Part 1 Answer: ', day6Part1Answer)
}

main();