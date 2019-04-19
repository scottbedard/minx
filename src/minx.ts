export default class Minx
{

    layers: number;

    /**
     * Constructor.
     * 
     * @param  {number}     layers      the size of our puzzle
     */
    constructor(layers: number)
    {
        // validate the layer size
        if (!Number.isInteger(layers) || layers < 2) {
            throw new Error('Minx layers must be an integer greater than 1.');
        }

        this.layers = layers;
    }
}
