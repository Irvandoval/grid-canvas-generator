'use strict';

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
 * @param {number} options.leftMargin - left margin between canvas and grid
 * @param {number} options.rightMargin - right margin between canvas and grid
 * @param {number} options.topMargin - top margin between canvas and grid
 * @param {number} options.bottomMargin - bottom margin between canvas and grid
 * @param {boolean} options.centered - center grid
 * @param {number} options.canvasWidth - width of canvas element
 * @param {number} options.canvasHeight - height of canvas element
 */
function generateCanvas(canvasId, options) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var xPosition;
    var yPosition;
    var auxPosX = 0;
    var auxPosY = 0;

    if (isAllSet(options)) {
        clearCanvas(ctx, { width: options.canvasWidth, height: options.canvasHeight });
        if (options.centered) {
            var totalWidth = options.canvasWidth - (options.leftMargin || 0) - (options.rightMargin || 0);
            var totalHeight = options.canvasHeight - (options.topMargin || 0) - (options.bottomMargin || 0);
            auxPosX = (totalWidth - ((options.columns * options.cellWidth) + ((options.columns - 1) * options.colMargin))) / 2;
            auxPosY = (totalHeight - ((options.rows * options.cellHeight) + ((options.rows - 1) * options.rowMargin))) / 2;
        }

        /** Drawing margins **/
        if (options.leftMargin)
            drawVerticalMargin(ctx, options.canvasWidth, options.canvasHeight, options.leftMargin, '#7B1FA2', 'left');
        if (options.rightMargin)
            drawVerticalMargin(ctx, options.canvasWidth, options.canvasHeight, options.rightMargin, '#7B1FA2', 'right');
        if (options.topMargin)
            drawHorizontalMargin(ctx, options.canvasWidth, options.canvasHeight, options.topMargin, '#009688', 'top');
        if (options.bottomMargin)
            drawHorizontalMargin(ctx, options.canvasWidth, options.canvasHeight, options.bottomMargin, '#009688', 'bottom');

        for (var i = 0; i < options.columns; i++) {
            for (var j = 0; j < options.rows; j++) {
                xPosition = (options.leftMargin || 0) + auxPosX + (i * (options.cellWidth + options.colMargin));
                yPosition = (options.topMargin || 0) + auxPosY + (j * (options.cellHeight + options.rowMargin));
                ctx.rect(xPosition, yPosition, options.cellWidth, options.cellHeight);
                ctx.stroke();
            }
        }

    }

}

/**
 * Clear canvas
 * @param {RenderingContext} context - canvas context
 * @param {object} canvas - canvas properties
 * @param {string} canvas.width - canvas width 
 * @param {string} canvas.height - canvas width 
 */
function clearCanvas(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    var w = canvas.width;
    canvas.width = 1;
    canvas.width = w;
    context.beginPath();
}

/**
 * Draw vertical margin on canvas
 * @param {RenderingContext} ctx - canvas context
 * @param {number} canvasWidth - canvas width
 * @param {number} canvasHeight - canvas height 
 * @param {number} xMargin  - x axis margin
 * @param {string} hexColor - hex color for stroke
 * @param {string} type  
 */
function drawVerticalMargin(ctx, canvasWidth, canvasHeight, xMargin, hexColor, type) {
    if (type === 'right') xMargin = canvasWidth - xMargin;
    console.info('vertical')
    console.log(xMargin + ',' + 0);
    console.log(xMargin + ',' + canvasHeight);
    ctx.setLineDash([5, 3]);/*dashes are 2px and spaces are 3px*/
    ctx.beginPath();
    ctx.moveTo(xMargin, 0);
    ctx.lineTo(xMargin, canvasHeight);
    ctx.strokeStyle = hexColor;
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.setLineDash([]);
}
/**
 * Draw Horizontal margin on canvas
 * @param {RenderingContext} ctx 
 * @param {number} canvasWidth 
 * @param {number} canvasHeight 
 * @param {number} yMargin 
 * @param {string} hexColor 
 * @param {string} type 
 */
function drawHorizontalMargin(ctx, canvasWidth, canvasHeight, yMargin, hexColor, type) {
    if (type === 'bottom') yMargin = canvasHeight - yMargin;
    console.info('horizontal')
    console.log(0 + ',' + yMargin);
    console.log(canvasWidth + ',' + yMargin);

    ctx.setLineDash([5, 3]);/*dashes are 2px and spaces are 3px*/
    ctx.beginPath();
    ctx.moveTo(0, yMargin);
    ctx.lineTo(canvasWidth, yMargin);
    ctx.strokeStyle = hexColor;
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.setLineDash([]);
}

function isAllSet(opts) {
    return opts.cellHeight && opts.cellHeight && opts.canvasHeight &&
        opts.canvasWidth && opts.rows && opts.columns;
}