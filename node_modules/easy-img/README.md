# Easy-Img 
> A simplified image manipulation package similar to [canvas](https://npmjs.com/package/canvas), providing easy-to-use functions for image editing.

## Installation
```bash
npm install easy-img
```

## Usage
### Importing The Functions and Classes
#### TypeScript:
```ts
import { Editor, Font, load_image_async, saveCanvasToFile, load_image } from 'easy-img';
```
#### JavaScript:
```js
const { load_image_async, Editor, Font, saveCanvasToFile } = require('easy-img');
```

### Example Code
#### Asynchronous Usage
```ts
(async () => {
    const background = new Editor("space.png").resize(800, 250);

    const avatar = await load_image_async('path/to/avatar.png');
    const circle_avatar = new Editor(avatar).resize(200, 200).circle_image();
    background.paste(circle_avatar, 25, 25);

    const big_text = Font.poppins(50, 'bold');
    const small_text = Font.poppins(30, 'regular');

    background.text([490, 50], "Author Name", { color: "white", font: big_text, align: "center" });
    background.text([490, 125], "You have 55 XP and are level 2", { color: "#00ced1", font: small_text, align: "center" });

    const canvas = background.getCanvas();
    saveCanvasToFile(canvas, 'output.png');
})();
```

#### Synchronous Usage
```ts
(() => {
    const background = new Editor("space.png").resize(800, 250);

    const avatar = load_image('path/to/avatar.png');
    const circle_avatar = new Editor(avatar).resize(200, 200).circle_image();
    background.paste(circle_avatar, 25, 25);

    const big_text = Font.poppins(50, 'bold');
    const small_text = Font.poppins(30, 'regular');

    background.text([490, 50], "Author Name", { color: "white", font: big_text, align: "center" });
    background.text([490, 125], "You have 55 XP and are level 2", { color: "#00ced1", font: small_text, align: "center" });

    const canvas = background.getCanvas();
    saveCanvasToFile(canvas, 'output.png');
})();
```