import { createState } from './utils';
import { MinxOptions, MinxState } from './types';

export default class Minx
{

    /**
     * Layer count.
     */
    layers: number;

    /**
     * Options.
     */
    options: MinxOptions;

    /**
     * State.
     */
    state: MinxState;

    /**
     * Constructor.
     * 
     * @param  {number}     layers      the size of our puzzle
     */
    constructor(layers: number, options: MinxOptions = {})
    {
        // validate the layer size
        if (!Number.isInteger(layers) || layers < 2) {
            throw new Error('Minx layers must be an integer greater than 1.');
        }

        // store data about the puzzle
        this.layers = layers;
        this.options = options;

        // create initial state
        this.state = createState(this);
    }
}
