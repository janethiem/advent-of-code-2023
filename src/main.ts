import * as fs from 'fs'
import { sumCalibrationValues } from './day1';

function main(): void
{
    const day1Input = fs.readFileSync('test/fixtures/day1Input.txt', 'utf8')
    const day1Answer = sumCalibrationValues(day1Input)
    console.log('Day 1 Answer: ', day1Answer)
}

main();