import { Canvas } from "canvas";
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
export declare function saveCanvasToFile(canvas: Canvas, filePath: string): void;
