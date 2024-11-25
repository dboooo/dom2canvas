import dom2canvs from '../lib/main'
import { jsPDF } from "jspdf";


// test1 input domelements with style tag
const test1_el = document.querySelector('#app') as HTMLElement

// test2 input domelements & styles strings
const test2_el = document.querySelector('h1') as HTMLElement
const test2_styles = `
      <style>
        h1 {
          color: yellow;
        }
      </style>
`
// test3 input string el & style strings
const test3_el = `
    <h1>Hello World12466612471264778</h1>
`
// test4 download image

// test5 download pdf

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

function downloadImage(canvas: HTMLCanvasElement) {
    const link = document.createElement("a");
  
    link.setAttribute("href", canvas.toDataURL("image/png"));
    link.setAttribute("download", "index.png");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
}

function downloadPdf (canvas: HTMLCanvasElement) {
    const pdf = new jsPDF();
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0);
    pdf.save("downloadedPdf.pdf");
}