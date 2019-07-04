import {
    chunk,
    rotateFace,
    shift,
    slice,
} from '../src/utils';

describe('util functions', () => {
    // quick helper function to generate index arrays
    // arr(3) => [0, 1, 2]
    // arr(4) => [0, 1, 2, 3]
    // etc...
    const arr = (len: number): number[] => {
        return new Array(len).fill(null).map((_: void, i: number) => i);
    }

    let minx2: any[],
        minx3: any[],
        minx4: any[],
        minx5: any[],
        minx6: any[],
        minx7: any[],
        minx8: any[],
        minx9: any[];

    beforeEach(() => {
        minx2 = arr(5);
        minx3 = arr(11);
        minx4 = arr(20);
        minx5 = arr(31);
        minx6 = arr(45);
        minx7 = arr(61);
        minx8 = arr(80);
        minx9 = arr(101);
    });

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

    it('rotateFace', () => {
        // kilo
        const kilo = arr(5);
        expect(rotateFace(2, kilo, 1)).toEqual([4, 0, 1, 2, 3]);
        expect(rotateFace(2, kilo, 2)).toEqual([3, 4, 0, 1, 2]);
        expect(rotateFace(2, kilo, -1)).toEqual([1, 2, 3, 4, 0]);
        expect(rotateFace(2, kilo, -2)).toEqual([2, 3, 4, 0, 1]);

        // mega
        const mega = arr(11);
        expect(rotateFace(3, mega, 1)).toEqual([0, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8]);
        expect(rotateFace(3, mega, 2)).toEqual([0, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6]);
        expect(rotateFace(3, mega, -1)).toEqual([0, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]);
        expect(rotateFace(3, mega, -2)).toEqual([0, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4]);

        // master kilo
        const masterKilo = arr(20);
        expect(rotateFace(4, masterKilo, 1)).toEqual([4, 0, 1, 2, 3, 17, 18, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        expect(rotateFace(4, masterKilo, 2)).toEqual([3, 4, 0, 1, 2, 14, 15, 16, 17, 18, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
        expect(rotateFace(4, masterKilo, -1)).toEqual([1, 2, 3, 4, 0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 5, 6, 7]);
        expect(rotateFace(4, masterKilo, -2)).toEqual([2, 3, 4, 0, 1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 5, 6, 7, 8, 9, 10]);
    });

    it('shift', () => {
        // center piece rings should not be changed
        expect(shift([0], 1)).toEqual([0]);
        expect(shift([0], 2)).toEqual([0]);
        expect(shift([0], -1)).toEqual([0]);
        expect(shift([0], -2)).toEqual([0]);

        // even layered rings
        const kilo = [0, 1, 2, 3, 4];
        expect(shift(kilo, 1)).toEqual([4, 0, 1, 2, 3]);
        expect(shift(kilo, 2)).toEqual([3, 4, 0, 1, 2]);
        expect(shift(kilo, -1)).toEqual([1, 2, 3, 4, 0]);
        expect(shift(kilo, -2)).toEqual([2, 3, 4, 0, 1]);

        // odd layered rings
        const mega = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(shift(mega, 1)).toEqual([9, 10, 1, 2, 3, 4, 5, 6, 7, 8]);
        expect(shift(mega, 2)).toEqual([7, 8, 9, 10, 1, 2, 3, 4, 5, 6]);
        expect(shift(mega, -1)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 1, 2]);
        expect(shift(mega, -2)).toEqual([5, 6, 7, 8, 9, 10, 1, 2, 3, 4]);
    });

    describe('slice (angles)', () => {
        const minx8 = arr(80);

        it('-2', () => {
            expect(slice(8, minx8, 1, -2)).toEqual([73, 74, 75, 76, 77, 78, 79, 45]);
        });

        it('-1', () => {
            expect(slice(8, minx8, 1, -1)).toEqual([66, 67, 68, 69, 70, 71, 72, 73]);
        });

        it('0', () => {
            expect(slice(8, minx8, 1, 0)).toEqual([59, 60, 61, 62, 63, 64, 65, 66]);
        });

        it('1', () => {
            expect(slice(8, minx8, 1, 1)).toEqual([52, 53, 54, 55, 56, 57, 58, 59]);
        });

        it('2', () => {
            expect(slice(8, minx8, 1, 2)).toEqual([45, 46, 47, 48, 49, 50, 51, 52]);
        });
    });

    describe('slice (sizes)', () => {
        it('2', () => {
            expect(slice(2, minx2, 1)).toEqual([2, 3]);
        });

        it('3', () => {
            expect(slice(3, minx3, 1)).toEqual([5, 6, 7]);
        });

        it('4', () => {
            expect(slice(4, minx4, 1)).toEqual([11, 12, 13, 14]);
            expect(slice(4, minx4, 2)).toEqual([2, 3, 10, 15]);
        });

        it('5', () => {
            expect(slice(5, minx5, 1)).toEqual([19, 20, 21, 22, 23]);
            expect(slice(5, minx5, 2)).toEqual([5, 6, 7, 18, 24]);
        });

        it('6', () => {
            expect(slice(6, minx6, 1)).toEqual([30, 31, 32, 33, 34, 35]);
            expect(slice(6, minx6, 2)).toEqual([11, 12, 13, 14, 29, 36]);
            expect(slice(6, minx6, 3)).toEqual([2, 3, 10, 15, 28, 37]);
        });

        it('7', () => {
            expect(slice(7, minx7, 1)).toEqual([43, 44, 45, 46, 47, 48, 49]);
            expect(slice(7, minx7, 2)).toEqual([19, 20, 21, 22, 23, 42, 50]);
            expect(slice(7, minx7, 3)).toEqual([5, 6, 7, 18, 24, 41, 51]);
        });

        it('8', () => {
            expect(slice(8, minx8, 1)).toEqual([59, 60, 61, 62, 63, 64, 65, 66]);
            expect(slice(8, minx8, 2)).toEqual([30, 31, 32, 33, 34, 35, 58, 67]);
            expect(slice(8, minx8, 3)).toEqual([11, 12, 13, 14, 29, 36, 57, 68]);
            expect(slice(8, minx8, 4)).toEqual([2, 3, 10, 15, 28, 37, 56, 69]);
        });

        it('9', () => {
            expect(slice(9, minx9, 1)).toEqual([77, 78, 79, 80, 81, 82, 83, 84, 85]);
            expect(slice(9, minx9, 2)).toEqual([43, 44, 45, 46, 47, 48, 49, 76, 86]);
            expect(slice(9, minx9, 3)).toEqual([19, 20, 21, 22, 23, 42, 50, 75, 87]);
            expect(slice(9, minx9, 4)).toEqual([5, 6, 7, 18, 24, 41, 51, 74, 88]);
        });
    });
});
