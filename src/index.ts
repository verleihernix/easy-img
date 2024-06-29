import { Image, loadImage, createCanvas } from 'canvas';

export * from './editor';
export * from './font';
export * from './utils';

/**
 * Synchronously loads an image from a URL.
 * @param {string} url - The URL of the image to load.
 * @returns An Image object.
 * @throws Will throw an error if the image cannot be loaded.
 * 
 * Example Usage:
 * ```ts
 * const image = load_image('http://example.com/image.png');
 * ```
 */
export function load_image(url: string): Image {
    let image = new Image();
    try {
        image.src = url;
    } catch (err) {
        throw new Error(`Failed to load image: ${err.message}`);
    }
    return image;
}

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
export async function load_image_async(url: string): Promise<Image> {
    return new Promise<Image>((resolve, reject) => {
        loadImage(url)
          .then(image => resolve(image))
          .catch(err => reject(err));
    });
};