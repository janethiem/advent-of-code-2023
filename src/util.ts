/** Returns a new set containing only the elements from a and b
 * which are present in both
 */
export function setIntersection<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  const intersection = new Set(
    [...setA].filter(element => setB.has(element))
  );

  return intersection;
}