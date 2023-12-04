import { findCalibrationValue, sumCalibrationValues } from '../src/day1'
import * as fs from 'fs'
const inputData = fs.readFileSync('test/fixtures/day1Test.txt', 'utf8')

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
        const sum = sumCalibrationValues("xmkhttr64htgvhjfivefcjlzjqrsjlfivekbcnhqpzg\nsevenkzvnkj5ftone")
        expect(sum).toEqual(119)
    })

    it("should return the correct sum of the calibration values for the test input", () => {
        const sum = sumCalibrationValues(inputData)
        expect(sum).toEqual(142)
    })
})

