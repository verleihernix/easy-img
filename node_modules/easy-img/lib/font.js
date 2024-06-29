"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Font = void 0;
/**
 * The `Font` class provides methods to create font styles.
 */
var Font = /** @class */ (function () {
    function Font() {
    }
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
    Font.poppins = function (size, variant) {
        var weight = variant === 'bold' ? 'bold' : 'normal';
        return "".concat(weight, " ").concat(size, "px Poppins");
    };
    return Font;
}());
exports.Font = Font;
