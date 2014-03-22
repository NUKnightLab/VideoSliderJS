/*  VCO.Media.Video

================================================== */

VCO.Media.Video = VCO.Media.extend({

    includes: [VCO.Events],

    /*  Load the media
    ================================================== */
    _loadMedia: function() {
        var api_url,
            self = this;

        // Loading Message
        this.message.updateMessage(VCO.Language.messages.loading + " " + this.options.media_name);

        // Create Dom element
        this._el.content_item   = VCO.Dom.create("div", "vco-media-item vco-media-video", this._el.content);

        // API Call
        this._el.content_item.innerHTML = "<video controls width='100%' height='100%' src='" + this.data.url + "'></video>"

        // After Loaded
        this.onLoaded();
    },

    // Update Media Display
    _updateMediaDisplay: function() {
        var size = VCO.Util.ratio.r16_9({w:this._el.content_item.offsetWidth , h:this.options.height});
        this._el.content_item.style.height = size.h + "px";
    }

});
