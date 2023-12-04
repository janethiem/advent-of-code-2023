import { setIntersection } from "../src/util";

describe('utility functions', (): void => {
    describe('setIntersection', (): void => {
        it('returns only the common elements of 2 sets', (): void => {
            const a = new Set([1, 2, 3, 4]);
            const b = new Set([2, 4, 6, 8]);
            const intersection = setIntersection(a, b);
            expect(intersection).toEqual(new Set([2, 4]));
        });
    });
});