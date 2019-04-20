import { chunk } from '../src/utils';

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
});
