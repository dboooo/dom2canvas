# Examples

## What dom2canvas2pdf could do?
0. control the styles what ever you want to show!! 

1. transform dom Elements to canvas, then return the canvas value for you by Promise!

2. download image result directly with a little code.

3. download pdf result with jspdf.


## Use
1. Use DOM Element & itselves styles: 

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
import dom2canvas from 'dom2canvas2pdf'

const _el = document.querySelector('#app') as HTMLElement

dom2canvs(_el).then((canvas)=>{
    document.body.append(canvas)
})
```

2. Dom Strings && styles strings
./src/main.ts content: 
```ts
import dom2canvas from 'dom2canvas'

const _el = document.querySelector('h1') as HTMLElement
const _styles = `
      <style>
        h1 {
          color: yellow;
          font-size: 3rem;
          font-family: 'Times New Roman', Times, serif;
        }
      </style>
`

dom2canvs(_el,_styles, {
    width: 600,
    height: 800
}).then((canvas)=>{
    document.body.append(canvas)
})
```
3. Input string el & style strings
```ts
import dom2canvas from 'dom2canvas'

const _el = `
  <h1>Hello World!!!! 777</h1>
`
const _styles = `
      <style>
        h1 {
          color: yellow;
          font-size: 3rem;
          font-family: 'Times New Roman', Times, serif;
        }
      </style>
`

dom2canvs(_el,_styles, {
    width: 600,
    height: 800
}).then((canvas)=>{
    document.body.append(canvas)
})
```

## Transform to Image & download

add this fuction to your code
```ts
......
dom2canvs(_el).then((canvas)=>{
    document.body.append(canvas)

    //+++ new +++
    downloadImage(canvas)
})

function downloadImage(canvas) {
    const link = document.createElement("a");
    
    // change the type of the image you want to download!
    link.setAttribute("href", canvas.toDataURL("image/png"));
    link.setAttribute("download", "index.png");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
}
```

## Transform to pdf & download

1. install jspdf 
```
npm i jspdf
```

2. add this fuction to your code
```ts
dom2canvs(_el).then((canvas)=>{
    document.body.append(canvas)

    //+++ new +++
    downloadPdf(canvas)
})

function downloadPdf (canvas) {
    const pdf = new jsPDF();
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0);
    pdf.save("downloadedPdf.pdf");
}
```

## Last
I wish this lib will help you!