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
 * @param {number} options.canvasWidth - Width of canvas element
 * @param {number} options.canvasHeight - Width of canvas element
 */
function generateCanvas(canvasId, options) {
    console.log(options);
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var xPosition;
    var yPosition;


    if (options.centered) {
        var auxposx = (options.canvasWidth - ((options.columns * options.cellWidth) + (options.columns * options.colMargin))) / 2;
        var auxposy = (options.canvasHeight - ((options.rows * options.cellHeight) + (options.rows * options.rowMargin))) / 2;
        options.xMargin = auxposx;
        options.yMargin = auxposy;
    }

    clearCanvas(ctx, { width: options.canvasWidth, height: options.canvasHeight });

    for (var i = 0; i < options.columns; i++) {
        for (var j = 0; j < options.rows; j++) {
            xPosition = (options.xMargin || 0) + (i * (options.cellWidth + options.rowMargin));
            yPosition = (options.yMargin || 0) + (j * (options.cellHeight + options.colMargin));
            ctx.rect(xPosition, yPosition, options.cellWidth, options.cellHeight);
            ctx.stroke();
        }
    }
}

function clearCanvas(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    var w = canvas.width;
    canvas.width = 1;
    canvas.width = w;
}