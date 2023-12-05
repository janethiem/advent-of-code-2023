import { findCalibrationValue, sumCalibrationValuesDigitsOnly, findCalibrationValueWithStringDigits, sumCalibrationValuesMixOfDigitsAndStrings } from '../src/day1'
import * as fs from 'fs'

describe("Day 1 tests" , () => {
    it("should return the correct calibration value when there are multiple numbers in the string", () => {
        const calibrationValue = findCalibrationValue("xmkhttr64htgvhjfivefcjlzjqrsjlfivekbcnhqpzg")
        expect(calibrationValue).toEqual(64)
    })

    it("should return the correct calibration value when there's only one number in the string", () => {
        const calibrationValue = findCalibrationValue("sevenkzvnkj5ftone")
        expect(calibrationValue).toEqual(55)
    })

    it("should return the sum of the calibration values", () => {
        const sum = sumCalibrationValuesDigitsOnly("xmkhttr64htgvhjfivefcjlzjqrsjlfivekbcnhqpzg\nsevenkzvnkj5ftone")
        expect(sum).toEqual(119)
    })

    it("should return the correct sum of the calibration values for the test input", () => {
        const inputData = fs.readFileSync('test/fixtures/day1Test.txt', 'utf8')
        const sum = sumCalibrationValuesDigitsOnly(inputData)
        expect(sum).toEqual(142)
    })
})

describe("Day 1 Part 2 Tests", () => {
    it ("should return the correct calibration values for strings with digit strings", () => {
        const calibrationValue = findCalibrationValueWithStringDigits("two1nine")
        expect(calibrationValue).toEqual(29)
    })

    it("should return to the correct calibration value for a mix of numbers and digit strings", () => {
        const calibrationValue = findCalibrationValueWithStringDigits("zoneight234")
        expect(calibrationValue).toEqual(14)
    })

    it("should return the correct calibration value for a string with a combined number digit strings", () => {
        const calibrationValue = findCalibrationValueWithStringDigits("twone")
        expect(calibrationValue).toEqual(21)
    })

    it("should return the correct sum of the calibration values for the test input", () => {
        const inputData = fs.readFileSync('test/fixtures/day1Part2Test.txt', 'utf8')
        const sum = sumCalibrationValuesMixOfDigitsAndStrings(inputData)
        expect(sum).toEqual(281)
    })

})

