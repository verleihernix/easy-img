import { Image } from 'canvas';
export * from './editor';
export * from './font';
export * from './utils';
/**
 * Synchronously loads an image from a URL.
 * @param {string} url - The URL of the image to load.
 * @returns An Image object.
 * @throws Will throw an error if the image cannot be loaded.
 * @deprecated Use `load_image_async` instead.
 *
 * Example Usage:
 * ```ts
 * const image = load_image('http://example.com/image.png');
 * ```
 */
export declare function load_image(url: string): Image;
/**
 * Asynchronously loads an image from a URL.
 * @param {string} url - The URL of the image to load.
 * @returns A promise that resolves to an Image object.
 *
 * Example Usage:
 * ```ts
 * const image = await load_image_async('http://example.com/image.png');
 * ```
 */
export declare function load_image_async(url: string): Promise<Image>;
