import { Image, createCanvas, CanvasRenderingContext2D } from "canvas";
/**
 * The `Editor` class provides methods to manipulate images.
 *
 * Example Usage:
 * ```ts
 * const editor = new Editor('image.png');
 * editor.resize(100, 100);
 * editor.cirle_image();
 * editor.paste(new Editor('image1.png'), 10, 10);
 * editor.text([10, 10], 'Hello, World!', { color: 'red', font: '30px sans-serif', align: 'start' });
 * const canvas = editor.getCanvas();
 * ```
 */
export declare class Editor {
    canvas: ReturnType<typeof createCanvas>;
    ctx: CanvasRenderingContext2D;
    /**
     * Creates a new `Editor` instance.
     * @param {Image | string} image - The image to edit.
     *
     * Example Usage:
     * ```ts
     * const editor = new Editor('image.png');
     * const editor1 = new Editor(new Image());
     * const editor2 = new Editor(imageObject);
     * ```
     */
    constructor(image: Image | string);
    /**
     * Resizes the image.
     * @param {number} width - The (new) width of the image.
     * @param {number} height - The (new) height of the image.
     * @returns The `Editor` instance with the resized image.
     *
     * Example Usage:
     * ```ts
     * const editor = new Editor('image.png');
     * editor.resize(100, 100);
     * ```
     */
    resize(width: number, height: number): this;
    /**
     * Creates a circular image.
     * @returns The `Editor` instance with the an circular image.
     *
     * Example Usage:
     * ```ts
     * const editor = new Editor('image.png');
     * editor.cirle_image();
     * ```
     */
    cirle_image(): this;
    /**
     * Pastes another image onto this image.
     * @param {Editor} image - The `Editor` instance of the image to paste.
     * @param {number} x - The X Position to paste the image.
     * @param {number} y - The Y Position to paste the image.
     * @returns The `Editor` instance with the pasted image.
     *
     * Example Usage:
     * ```ts
     * const editor = new Editor('image.png');
     * const editor1 = new Editor('image1.png');
     * editor.paste(editor1, 10, 10);
     * ```
     */
    paste(image: Editor, x: number, y: number): this;
    /**
     * Draws text onto the image.
     * @param {[number, number]} position - The [x, y] coordinates where the text should be drawn.
     * @param {string} text - The text do draw.
     * @param {{color?: string, font?: string, align?: CanvasTextAlign}} options - The options for drawing the text, including color, font, and alignment.
     * @returns The `Editor` instance with the drawn text.
     *
     * Example Usage:
     * ```ts
     * const editor = new Editor('image.png');
     * editor.text([10, 10], 'Hello, World!', { color: 'red', font: '30px sans-serif', align: 'start' });
     * ```
     */
    text(position: [number, number], text: string, options?: {
        color?: string;
        font?: string;
        align?: CanvasTextAlign;
    }): this;
    /**
     * Gets the canvas object.
     * @returns The canvas object.
     *
     * Example Usage:
     * ```ts
     * const editor = new Editor('image.png');
     * const canvas = editor.getCanvas();
     * ```
     */
    getCanvas(): ReturnType<typeof createCanvas>;
}
