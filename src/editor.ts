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
export class Editor {
    public canvas: ReturnType<typeof createCanvas>;
    public ctx: CanvasRenderingContext2D;

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
    constructor(image: Image | string) {
        if (typeof image === 'string') {
            const img = new Image();
            img.src = image;
            this.canvas = createCanvas(img.width, img.height);
            this.ctx = this.canvas.getContext('2d');
            this.ctx.drawImage(img, 0, 0);
        } else {
            this.canvas = createCanvas(image.width, image.height);
            this.ctx = this.canvas.getContext('2d');
            this.ctx.drawImage(image, 0, 0);
        }
    }

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
    public resize(width: number, height: number): this {
        const resizedCanvas = createCanvas(width, height);
        const resizedCtx = resizedCanvas.getContext('2d');
        resizedCtx.drawImage(this.canvas, 0, 0, width, height);
        this.canvas = resizedCanvas;
        this.ctx = resizedCtx;
        return this;
    }

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
    public cirle_image(): this {
        const { width, height } = this.canvas;
        const mask = createCanvas(width, height);
        const maskCtx = mask.getContext('2d');

        maskCtx.beginPath();
        maskCtx.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, Math.PI * 2, true);
        maskCtx.closePath();
        maskCtx.clip();

        maskCtx.drawImage(this.canvas, 0, 0);
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.drawImage(mask, 0, 0);

        return this;
    }

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
    public paste(image: Editor, x: number, y: number): this {
        this.ctx.drawImage(image.canvas, x, y);
        return this;
    }

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
    public text(position: [number, number], text: string, options: { color?: string, font?: string, align?: CanvasTextAlign } = {}): this {
        const { color = 'black', font = '30px sans-serif', align = 'start' } = options;
        this.ctx.fillStyle = color;
        this.ctx.font = font;
        this.ctx.textAlign = align;
        this.ctx.fillText(text, position[0], position[1]);
        return this;
    }

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
    public getCanvas(): ReturnType<typeof createCanvas> {
        return this.canvas;
    }
}