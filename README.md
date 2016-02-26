# Comely

This projecct simply wrappers JS-Beautify and Minify into a browser friendly package to consume using Browserify.

## Instructions
To install copy the dist/comely.js to your public static shared area on your server.
Than include &lt;script src="comely.js"&gt;&lt;/script&gt; into your HTML.

On loading you will have access to a object Comely which olds all the functions for beautify-ing and minify-ing.

- Comely.beautify.html([html data]) returns beautify HTML string.
- Comely.beautify.css([css data]) returns beautify CSS string.
- Comely.beautify.js([js data]) returns beautify JS string.
- Comely.minify.html([html data], callback([err], [minified data]) )
- Comely.minify.css([css data], callback([err], [minified data]) )
- Comely.minify.js([js data], callback([err], [minified data]) )
