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