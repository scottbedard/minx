(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.bedardMinx = {}));
}(this, function (exports) { 'use strict';

    class Minx {
        /**
         * Constructor.
         *
         * @param  {number}     layers      the size of our puzzle
         */
        constructor(layers) {
            // validate the layer size
            if (!Number.isInteger(layers) || layers < 2) {
                throw new Error('Minx layers must be an integer greater than 1.');
            }
            this.layers = layers;
        }
    }

    exports.Minx = Minx;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
