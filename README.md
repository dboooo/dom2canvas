<br />
<div align="center">
  <h2 align="center">dom2canvas</h2>
  <p align="center">
    Convert dom/stings to canvas, it's just <strong>0.85kb(gzip)!!</strong>
    <br />
    <br />
    <a href="https://dom2canvas2pdf.vercel.app/"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</div>

## Work Show: 

![dom2canvas](./public/result.png)

### What dom2canvas could do?
1. transform dom Element innerHTML to canvas, and will return the canvas for you to do more works!

2. transform the dom stings


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

## Transform to Image and DownLoad It

Try this: 
