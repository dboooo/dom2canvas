# Examples

## Get Started
use npm: 
```
npm i dom2canvas
```

use yarn: 
```
yarn add dom2canvas
```

use pnpm: 
```
pnpm i dom2canvas
```


## Use
1. Use DOM Element: 

```html
    <div id="app">
      <style>
        h1 {
          color: red;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode';
        }
      </style>
      <h1>Hello World</h1>
    </div>
    <script src="./src/main.ts" type="module"></script>
```
./src/main.ts content: 
```ts
import dom2canvas from 'dom2canvas'

dom2canvas(document.querySelector('#app') as HTMLElement)
```

2. Dom Strings
./src/main.ts content: 
```ts
import dom2canvas from 'dom2canvas'

dom2canvas(`
    <style>
      h1 {
        font-family: Papyrus, fantasy;
        color: red;
      }
    </style>
    <h1>Hello World!</h1>
`)
```
3. Strightly Use
```ts
import dom2canvas from 'dom2canvas'

dom2canvas()
```

note: you should import this script in your html body first!


## Transform to pdf

I recommand you try jspdf, and just give it this code it will work!

```ts
import { jsPDF } from "jspdf";
import dom2canvas from 'dom2canvas'

const canvas = dom2canvas()

const pdf = new jsPDF();
pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0);
pdf.save("downloadedPdf.pdf");
```