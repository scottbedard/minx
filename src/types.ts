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
 * Rotation quantifier.
 * 
 * One '+' indicates a single clockwise turn, while '++'
 * indicate a double clockwise turn. Similarly, '-' and
 * '--' indicate single and double counter-clockwise turns.
 */
export type Rotation = '+' | '++' | '-' | '--';
