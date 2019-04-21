/**
 * Constructor options.
 */
export type MinxOptions = {
    useObjects?: boolean,
};

/**
 * State.
 */
export type MinxState = {
    U: Array<any>,
    F: Array<any>,
    L: Array<any>,
    BL: Array<any>,
    BR: Array<any>,
    R: Array<any>,
    D: Array<any>,
    B: Array<any>,
    DBL: Array<any>,
    DL: Array<any>,
    DR: Array<any>,
    DBR: Array<any>,
};

/**
 * Rotation.
 * 
 * -2 = twice counter-clockwise
 * -1 = once counter-clockwise
 * 1  = once clockwise
 * 2  = twice clockwise
 */
export type Rotation = -2 | -1 | 1 | 2;
