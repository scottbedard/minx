import { MinxState, Rotation } from './types';
import Minx from './minx';

/**
 * Seperate a face of values into an array of rings.
 *
 * @param   {number}            layers
 * @param   {Array<any>}        face
 * @return  {Array<any[]>}
 */
export function chunk(layers: number, face: any[]): Array<any[]> {
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
export function createState(minx: Minx): MinxState {
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
 * Rotate a face array.
 *
 * @param   {number}    layers      size of the face
 * @param   {any[]}     face        array of face values
 * @param   {Rotation}  rotation    -2, -1, 1, or 2
 * @return  {any[]}
 */
export function rotateFace(layers: number, face: any[], rotation: Rotation): any[] {
    return chunk(layers, face)
        .map(ring => shift(ring, rotation))
        .flat(1);
}

/**
 * Shift a face ring clockwise or counter clockwise.
 *
 * @param   {any[]}     ring
 * @param   {Rotation}  rotation
 * @param   {any[]} 
 */
export function shift(ring: any[], rotation: Rotation): any[] {
    // center pieces do not move, so we'll simply
    // clone the array and return it unchanged.
    if (ring.length === 1) {
        return ring.slice(0);
    }

    const clockwise = rotation > 0;
    const rotationAmount = (ring.length / 5) * Math.abs(rotation);
    const start = clockwise ? rotationAmount * -1 : rotationAmount;
    const end = clockwise ? ring.length - rotationAmount : rotationAmount;

    return ring.slice(start).concat(ring.slice(0, end));
}

/**
 * Extract a slice from a face by depth and rotation angle.
 *
 * @param   {number}    layers
 * @param   {any[]}     face 
 * @param   {number}    turnDepth
 * @param   {number}    angle
 * @return  {any[]}
 */
export function slice(layers: number, face: any[], turnDepth: number, angle: number = 0): any[] {
    const rings = chunk(layers, face);

    return rings.reduce((acc, ring, index) => {
        // calculate the depth from the outer-most ring
        const ringDepth = rings.length - index;
        const depthOffset = turnDepth - ringDepth;

        // number of positions between corners of this ring
        const innerOffset = Math.floor(ring.length / 5);

        // offset from start of ring to the lower right corner
        // of the ring. we use this as a starting point to
        // calculate where to slice our ring arrays from
        const lowerRightCornerOffset = innerOffset * 2;

        // if ring depth equals turn depth, extract bottom slice
        if (ringDepth === turnDepth) {
            const end = lowerRightCornerOffset + innerOffset + 1;

            return acc.concat(ring.slice(lowerRightCornerOffset, end));
        }

        // if the ringDepth less than turnDepth, extract intersections
        if (ringDepth < turnDepth) {
            const leadingOffset = lowerRightCornerOffset - depthOffset;
            const trailingOffset = leadingOffset + depthOffset + innerOffset + depthOffset;

            return acc.concat(ring[leadingOffset], ring[trailingOffset]);
        }

        return acc;
    }, []);
}