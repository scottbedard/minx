(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.bedardMinx = {}));
}(this, function (exports) { 'use strict';

    /**
     * Seperate a face of values into an array of rings.
     *
     * @param   {number}            layers
     * @param   {Array<any>}        face
     * @return  {Array<any[]>}
     */
    /**
     * Create the sticker values for a puzzle.
     *
     * @return void
     */
    function createState(minx) {
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
        };
    }

    class Minx {
        /**
         * Constructor.
         *
         * @param  {number}     layers      the size of our puzzle
         */
        constructor(layers, options = {}) {
            // validate the layer size
            if (!Number.isInteger(layers) || layers < 2) {
                throw new Error('Minx layers must be an integer greater than 1.');
            }
            // store data about the puzzle
            this.layers = layers;
            this.options = options;
            // create initial state
            this.state = createState();
        }
    }

    exports.Minx = Minx;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
