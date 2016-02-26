/**
 * htmlMin
 * Original source from Minify project.
 * Forked by Shawn Rapp for project Comely
 */
(function() {
    'use strict';
    
    var assert      = require('assert'),
        tryCatch    = require('try-catch'),
        Minifier    = require('html-minifier'),
        
        ErrorMsg    = Error([
            'can\'t load html-minifier',
            'npm install html-minifier',
            'https://github.com/kangax/html-minifier'].join('\n')),
        
        Options     = {
            removeComments:                 false,
            removeCommentsFromCDATA:        false,
            removeCDATASectionsFromCDATA:   false,
            collapseWhitespace:             true,
            conservativeCollapse:           true,
            collapseInlineTagWhitespace:    false,
            preserveLineBreaks:             true,
            collapseBooleanAttributes:      true,
            removeTagWhitespace:            true,
            removeAttributeQuotes:          false,
            removeRedundantAttributes:      true,
            preventAttributesEscaping:      false,
            useShortDoctype:                false,
            removeEmptyAttributes:          false,
            removeScriptTypeAttributes:     false,
            removeStyleLinkTypeAttributes:  false,
            removeScriptTypeAttributes:     false,
            removeStyleLinkTypeAttributes:  false,
            removeOptionalTags:             false,
            removeEmptyElements:            false,
            lint:                           false,
            keepClosingSlash:               false,
            caseSensitive:                  false,
            minifyJS:                       true,
            minifyCSS:                      true,
            minifyURLs:                     false,
        };
    
    /**
     * minify html data.
     *
     * @param data
     * @param callback
     */
    module.exports = function(data, callback) {
        var error;
        
        assert(data);
        assert(callback);
        
        if (!Minifier)
            error   = ErrorMsg;
        else
            error   = tryCatch(function() {
                data = Minifier.minify(data, Options);
            });
        
        callback(error, data);
    };
})();
