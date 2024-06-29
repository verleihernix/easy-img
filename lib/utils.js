"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveCanvasToFile = void 0;
var fs_1 = require("fs");
/**
 * Saves the canvas content to a file.
 * @param {Canvas} canvas - The canvas object to save.
 * @param {string} filePath - The path to the file to save the canvas to.
 *
 * Example Usage:
 * ```ts
 * const editor = new Editor('image.png');
 * const canvas = editor.getCanvas();
 * saveCanvasToFile(canvas, 'output.png');
 * ```
 */
function saveCanvasToFile(canvas, filePath) {
    var out = (0, fs_1.createWriteStream)(filePath);
    var stream = canvas.createPNGStream();
    stream.pipe(out);
    out.on('finish', function () {
        console.log('The PNG file was created.');
    });
}
exports.saveCanvasToFile = saveCanvasToFile;
;
