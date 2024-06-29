/**
 * The `Variant` type represents the font variants.
 */
export type Variant = 'regular' | 'bold';
/**
 * The `Font` class provides methods to create font styles.
 */
export declare class Font {
    /**
     * Creates a `Poppins` font style.
     * @param {number} size - The size of the font.
     * @param {Variant} variant - The variant of the font. Either `regular` or `bold`.
     * @returns The font style string.
     *
     * Example Usage:
     * ```ts
     * const font = Font.poppins(16, 'bold');
     * ```
     */
    static poppins(size: number, variant: Variant): string;
}
