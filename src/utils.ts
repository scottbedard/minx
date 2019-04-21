import { MinxState, Rotation } from './types';
import Minx from './minx';

/**
 * Seperate a face of values into an array of rings.
 *
 * @param   {number}            layers
 * @param   {Array<any>}        face
 * @return  {Array<any[]>}
 */
export function chunk(layers: number, face: any[]): number[] {
    const rings: any[] = [];
    const clonedFace = face.slice(0);
    
    // even layered puzzles
    if (layers % 2 === 0) {
        for (let i = 1, end = layers / 2; i <= end; i++) {
            rings.push(clonedFace.splice(0, ((i * 2) - 1) * 5));
        }
    }
    
    // odd layered puzzles
    // the initial ring represents the center
    else {
        rings.push(clonedFace.splice(0, 1));

        for (let i = 1, end = Math.floor(layers / 2); i <= end; i++) {
            rings.push(clonedFace.splice(0, i * 2 * 5));
        }
    }

    return rings;
}

/**
 * Create the sticker values for a puzzle.
 *
 * @return void
 */
export function createState(minx: Minx): MinxState
{
    console.log(minx);
    
    return {
        U: [],
        F: [],
        L: [],
        BL: [],
        BR: [],
        R: [],
        D: [],
        B: [],
        DBL: [],
        DL: [],
        DR: [],
        DBR: [],
    }
}

/**
 * Shift a face ring clockwise or counter clockwise.
 *
 * @param   {any[]}     ring
 * @param   {Rotation}  rotation
 * @param ring 
 */
export function shift(ring: any[], rotation: Rotation): any[] {
    // center pieces do not move, so we'll simply
    // clone the array and return it unchanged.
    if (ring.length === 1) {
        return ring.slice(0);
    }

    const clockwise = rotation === '+' || rotation === '++';
    const rotationAmount = (ring.length / 5) * rotation.length;
    const start = clockwise ? rotationAmount * -1 : rotationAmount;
    const end = clockwise ? ring.length - rotationAmount : rotationAmount;

    return ring.slice(start).concat(ring.slice(0, end));
}