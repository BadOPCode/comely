/**
 * Comely
 * Author: Shawn Rapp
 * License: MIT
 */
(function() {
    "use strict";
    var
        comelyModule = {};

    comelyModule = {};

    (function() {
        var
            beautify = require('js-beautify');

        comelyModule.beautify = {
            css: beautify.css_beautify,
            html: beautify.html_beautify,
            js: beautify.js_beautify
        };
    })();

    (function() {
        comelyModule.minify = {
            css: require('./lib/cssMin'),
            html: require('./lib/htmlMin'),
            img: require('./lib/imgMin'),
            js: require('./lib/jsMin')
        };
    })();

    module.exports = comelyModule;
})();