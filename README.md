This is a simple startup project with compiles SCSS into CSS using gulp.

The gulp file will look at the main.scss file within the /src/scss directory and compile it into CSS. The gulp file will compile the SCSS into both standard and minified (.min) CSS stylsheets using a map to help with style debugging. 

Once compiled, the CSS files will be found within the /dist directory. **Please note** the /dist directory/folder is compiled and created when the gulp talk is run. No code changes should be made here! 

Naturally, the index.html will look for the minified CSS file (main.min.css) but this can be changed within the <head></head> of the page by changing the href value of the stylesheet. 

## Setup 
1. If you do not have node.js. Go to [https://nodejs.org/en/](https://nodejs.org/en/) and download the latest and most stable version of node.js. This should also install npm (Node Package Manager).
2. Install gulp and gulp cli globally by running `npm install -g gulp gulp-cli`
3. Open your terminal within the project directory
4. Run `npm install` 

The following steps above only need to be done for the first time running of the project

To compile and run the project, run `gulp` and then `gulp watch` within a terminal opened at the root of this project. This should compile the CSS and run a localhost within your default browser. When a change is made within the index.html or any .scss files, the task will automatically compile the styles and reload the browser. 