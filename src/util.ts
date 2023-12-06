import * as fs from 'fs'

/** Returns a new set containing only the elements from a and b
 * which are present in both
 */
export function setIntersection<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  const intersection = new Set(
    [...setA].filter(element => setB.has(element))
  );

  return intersection;
}

// Returns true if the character is a digit
export const isDigit = (char : string) : boolean => {
  if (char.length !== 1) {
    throw new Error("function expects a single character")
  }

  return /[0-9]/.test(char)
}

// Reads a text file from the provided filname in the fixtures folder, splits by newlines, and returns an array of strings
export const parseTextFileIntoLines = (filename : string) : string[] => {
  const data = fs.readFileSync('test/fixtures/' + filename, 'utf8')
  return data.split('\n')
}

// Reads a text file from the provided filname in the fixtures folder, splits by newlines, and returns a 2d array of strings
export const parseTextFileIntoGrid = (filename : string) : string[][] => {
  const data = fs.readFileSync('test/fixtures/' + filename, 'utf8')
  return data.split('\n').map(line => line.split(''))
}