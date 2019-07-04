/**
 * Face relationships.
 * 
 * This constant defines how faces are related to
 * one another. Each face has 5 related faces, stored
 * in [face, rotation] format. The rotation represents
 * the the orientation of the related face relative to
 * the shared edge with the parent face.
 */
export const relationships = {
    U: [['F', 0], ['L', 0], ['BL', 0], ['BR', 0], ['R', 0]],
    F: [['U', 0], ['R', -1], ['DR', 2], ['DL', -2], ['L', 1]],
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