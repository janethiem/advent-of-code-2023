import { isDigit } from "./util"

export const sumCalibrationValues = (input : string) : number => {
    let sum = 0;
    const lines = input.split('\n')
    lines.forEach((line) => {
        const calibrationValue = findCalibrationValue(line)
        sum = sum + calibrationValue
    })

    return sum
}

export const findCalibrationValue = (line : string) : number => {
    let calibrationValue = null
    let front = 0
    let back = line.length - 1
    while (front <= back && calibrationValue === null)
    {
        const isFrontDigit = isDigit(line[front])
        const isBackDigit = isDigit(line[back])
        if (isFrontDigit && isBackDigit) calibrationValue = parseInt(line[front] + line[back], 10)
        if (!isFrontDigit) front ++
        if (!isBackDigit) back --
    }

    return calibrationValue === null ? 0 : calibrationValue
}