import { Minx } from '../src';

describe('minx api', () => {
    it('must be instantiated with a valid size parameter', () => {
        // must be greater than one
        expect(() => new Minx(1)).toThrow();
        expect(() => new Minx(2)).not.toThrow();

        // must be an integer
        expect(() => new Minx(2.5)).toThrow();
        expect(() => new Minx(NaN)).toThrow();
        expect(() => new Minx(Infinity)).toThrow();
    });
});
