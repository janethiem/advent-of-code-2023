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