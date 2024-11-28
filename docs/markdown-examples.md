# Examples

## API Introduce
```ts
Dom2canvas(element?: Element, styles?: string, options?: Options): Promise<HTMLCanvasElement>

type Element = HTMLElement | string

interface Options {
  width?: string
  height?: string
  canvas?: HTMLCanvasElement
}
```



## Content Will Render
<div style="display: flex; justify-content: center;">
  <div id="test111" data-v-a6369f60="" class="items" style="display: flex; justify-content: center;"><div data-v-a6369f60="" class="item grid-3"><div data-v-1ffeb59b="" data-v-a6369f60="" class="VPLink no-icon VPFeature"><article data-v-1ffeb59b="" class="box"><div data-v-1ffeb59b="" class="icon">⚡️</div><h2 data-v-1ffeb59b="" class="title">Mini</h2><p data-v-1ffeb59b="" class="details">Based on typescript, Only 0.67kb</p><!--v-if--></article></div></div><div data-v-a6369f60="" class="item grid-3"><div data-v-1ffeb59b="" data-v-a6369f60="" class="VPLink no-icon VPFeature"><article data-v-1ffeb59b="" class="box"><div data-v-1ffeb59b="" class="icon">✨</div><h2 data-v-1ffeb59b="" class="title">Transform</h2><p data-v-1ffeb59b="" class="details">Transform to canvas | image | pdf</p><!--v-if--></article></div></div><div data-v-a6369f60="" class="item grid-3"><div data-v-1ffeb59b="" data-v-a6369f60="" class="VPLink no-icon VPFeature"><article data-v-1ffeb59b="" class="box"><div data-v-1ffeb59b="" class="icon">🛠️</div><h2 data-v-1ffeb59b="" class="title">Styles</h2><p data-v-1ffeb59b="" class="details">Provide the styles you want to show!!</p><!--v-if--></article></div></div></div>
</div>

  <button style="border: 1px solid; padding: 4px;" id="_img">Download Image</button>

<button style="border: 1px solid; padding: 4px;" id="_pdf">Download PDF</button>

<script setup>

import { onMounted } from 'vue'
import Dom2canvas from 'dom2canvas'
import jsPDF from 'jspdf'

onMounted(()=>{
  const _img_ct = document.querySelector('#test111')
  const _img = document.querySelector('#_img')
  const _pdf = document.querySelector('#_pdf')
  const _styles =  `
      <style>
      .items {
          display: flex;
          flex-wrap: no-wrap;
          margin: 0 auto;
          margin: -8px;
          background: #fff;
          padding: 1rem;
        }
        .item {
          padding: 8px;
        }
        .grid-3 {
          width: calc(100% / 3);
        }
        .box {
          display: flex;
          flex-direction: column;
          padding: 24px;
          height: 100%;
        }
        .VPFeature {
          display: block;
          border: 1px solid #f6f6f7;
          border-radius: 12px;
          height: 100%;
          background: #f6f6f7;
        }
        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            border-radius: 6px;
            background: rgba(142, 150, 170, 0.14);
            width: 48px;
            height: 48px;
            font-size: 24px;
        }
        .title {
          line-height: 24px;
          font-size: 16px;
          font-weight: 600;
        }
        h2 {
          margin: 48px 0 16px;
          border-top: 1px solid #c2c2c4;
          padding-top: 24px;
          letter-spacing: -0.02em;
        }
        .details {
            flex-grow: 1;
            padding-top: 8px;
            line-height: 24px;
            font-size: 14px;
            font-weight: 500;
            color: rgba(60, 60, 67, 0.78);
        }
        <\/style>
      `

  _img.addEventListener('click',()=>{
      Dom2canvas(_img_ct, _styles, {
        width: _img_ct.clientWidth,
        height: _img_ct.clientHeight
      }).then((canvas)=>{
          downloadImage(canvas)
      })
  })

  _pdf.addEventListener('click',()=>{
      Dom2canvas(_img_ct, _styles, {
        width: _img_ct.clientWidth,
        height: _img_ct.clientHeight
      }).then((canvas)=>{
          downloadPdf(canvas)
      })
  })

    function downloadPdf (canvas) {
      const pdf = new jsPDF();
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0);
      pdf.save("downloadedPdf.pdf");
    }
    function downloadImage(canvas) {
          const link = document.createElement("a");
          
          // change the type of the image you want to download!
          link.setAttribute("href", canvas.toDataURL("image/png"));
          link.setAttribute("download", "index.png");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link)
    }
}
)
</script>