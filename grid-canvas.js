/**
 * Generates a grid of rectangles based on options
 * @param {string} canvasId - id of canvas html element 
 * @param {object} options - options to generate grid
 * @param {number} options.cellWidth - width of cell
 * @param {number} options.cellHeight - height of cell
 * @param {number} options.rows - number of cells per row
 * @param {number} options.columns - number of cells per column
 * @param {number} options.rowMargin - margin between rows
 * @param {number} options.colMargin - margin between columns
 * @param {number} options.xMargin - horizontal margin between canvas and grid
 * @param {number} options.yMargin - vertical margin between columns canvas and grid
 * @param {boolean} options.centered - center grid
 */
function generateCanvas(canvasId, options) {
    console.log(options);
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var xPosition;
    var yPosition;

    for (var i = 0; i < options.columns; i++) {
        for (var j = 0; j < options.rows; j++) {
            xPosition = (options.xMargin || 0) + (i * (options.cellWidth + options.rowMargin));
            yPosition = (options.yMargin || 0) + (j * (options.cellHeight + options.colMargin));
            ctx.rect(xPosition, yPosition, options.cellWidth, options.cellHeight);
            ctx.stroke();
        }
    }
}

 /**variables
    var cellWidth = 60;
    var cellHeight = 100;
    var rows = 5;
    var columns = 8;
    var marginColumn = 10;
    var marginRow = 5;
    var canvasMargin = 10;
    var rowMargin = 5;
    var columnMargin = 10;
    var xPosition;
    var yPosition;
    /******************/