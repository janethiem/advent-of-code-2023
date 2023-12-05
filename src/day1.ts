import { isDigit } from "./util"
import { FIRST_LETTER_TO_STRING_MAP, STRING_TO_DIGIT_MAP } from "./constants";

export const sumCalibrationValuesDigitsOnly = (input : string) : number => {
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

export const sumCalibrationValuesMixOfDigitsAndStrings = (input : string) : number => {
    let sum = 0;
    const lines = input.split('\n')
    lines.forEach((line) => {
        const calibrationValue = findCalibrationValueWithStringDigits(line)
        sum = sum + calibrationValue
    })

    return sum
}

export const findCalibrationValueWithStringDigits = (line : string) : number => {
    let currentIndex = 0
    let firstValue = null
    let secondValue = null

    while ( currentIndex < line.length )
    {
        const currentChar = line[currentIndex]
        let digit = null
        // first, check if the first character in the window is a digit
        if (isDigit(currentChar))
        {
            // if it is, set the first value if it's not set to anything
            digit = parseInt(currentChar, 10)
        }
        // if the first char in the window is the first letter of a known digit string
        else if (FIRST_LETTER_TO_STRING_MAP.has(currentChar)) 
        {
            // Check the map for potential digit strings, then check if the substring of the same length matches
            const digitStringsWithMatchingFirstLetter = FIRST_LETTER_TO_STRING_MAP.get(currentChar)
            for (const digitString of digitStringsWithMatchingFirstLetter)
            {
                // Can't compare the substrings if there isn't enought runway
                if (digitString.length > (line.length - currentIndex)) continue

                const currentSubstring = line.substring(currentIndex, currentIndex + digitString.length)
                if (currentSubstring === digitString)
                {
                    // Found a match!
                    digit = STRING_TO_DIGIT_MAP.get(currentSubstring)
                    break
                }
            }
        }

        if (digit !== null)
        {
            if (firstValue === null) firstValue = digit
            // Always set the second value if there's a new digit
            secondValue = digit
        }
        
        currentIndex ++
    }

    if (firstValue && secondValue) return firstValue * 10 + secondValue
    else return 0
}