/* QUADRANT
=========================================== */

VCO.Slide = VCO.Class.extend({

    includes: [VCO.Events, VCO.DomMixins],

    _el: {},

    /*  Constructor
    ================================================== */
    initialize: function(container, media_element, quadrant) {

        // DOM Elements
        this._el = {
            container: container,
            media_element: media_element,
        };
        // Options
        this.options = {
            // animation
            width: null,
            height: null,
            quadrant: {
                top_left: null,
                top_right: null,
                bottom_left: null,
                bottom_right: null,
                center: null
            }
        };

        // Merge Data and Options
        VCO.Util.mergeData(this.data, data);

        this._initLayout();
        this._updateDisplay();

    },

    _initLayout: function() {
        this.options.width = this._el.container.offsetWidth;
        this.options.height = this._el.container.offsetHeight;

        this._calculateQuadrantPosition();
        this._applyQuadrants();
    },

    _calculateQuadrantPosition: function() {
        this.options.quadrant.top_left = [this._el.container.top, this._el.container.left];
        this.options.quadrant.top_right = [this._el.container.top, this._el.container.right];
        this.options.quadrant.bottom_left = [this._el.container.bottom, this._el.container.left];
        this.options.quadrant.bottom_right = [this._el.container.bottom, this._el.container.right];
    },

    _applyQuadrants: function() {
        this._el
    }

