import { chunk, shift } from '../src/utils';

describe('util functions', () => {
    // quick helper function to generate index arrays
    // arr(3) => [0, 1, 2]
    // arr(4) => [0, 1, 2, 3]
    // etc...
    const arr = (len: number): number[] => {
        return new Array(len).fill(null).map((_: void, i: number) => i);
    }

    it('chunk', () => {
        // kilominx
        const kilo = arr(5);
        
        expect(chunk(2, kilo)).toEqual([
            [0, 1, 2, 3, 4],
        ]);

        // megaminx
        const mega = arr(11);

        expect(chunk(3, mega)).toEqual([
            [0],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        ]);

        // master kilominx
        const masterKilo = arr(20);

        expect(chunk(4, masterKilo)).toEqual([
            [0, 1, 2, 3, 4],
            [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        ]);

        // gigaminx
        const giga = arr(61); 

        expect(chunk(5, giga)).toEqual([
            [0],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        ]);
    });

    it('shift', () => {
        // center piece rings should not be changed
        expect(shift([0], '+')).toEqual([0]);
        expect(shift([0], '++')).toEqual([0]);
        expect(shift([0], '-')).toEqual([0]);
        expect(shift([0], '--')).toEqual([0]);

        // even layered rings
        const kilo = [0, 1, 2, 3, 4];
        expect(shift(kilo, '+')).toEqual([4, 0, 1, 2, 3]);
        expect(shift(kilo, '++')).toEqual([3, 4, 0, 1, 2]);
        expect(shift(kilo, '-')).toEqual([1, 2, 3, 4, 0]);
        expect(shift(kilo, '--')).toEqual([2, 3, 4, 0, 1]);

        // odd layered rings
        const mega = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(shift(mega, '+')).toEqual([9, 10, 1, 2, 3, 4, 5, 6, 7, 8]);
        expect(shift(mega, '++')).toEqual([7, 8, 9, 10, 1, 2, 3, 4, 5, 6]);
        expect(shift(mega, '-')).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 1, 2]);
        expect(shift(mega, '--')).toEqual([5, 6, 7, 8, 9, 10, 1, 2, 3, 4]);
    });
});
