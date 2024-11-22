---
layout: home

hero:
  name: "dom2canvas"
  text: "Convert DOM Elements/strings to canvas"
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
---

## Quick Show: 

```js
// code: 
import Dom2canvas from 'dom2canvas'

Dom2canvas(document.querySelector('.dom'),{
    canvas: document.querySelector("#render-container"),
    canvasHeight: 200,
    canvasWidth: 200
})

```
### HTML DOM Content: 
<br />
<div class="dom">
  <h3>Hello World</h3>
</div>


### OUT PUT: 

<canvas id="render-container"></canvas>


<script setup>
import { onMounted } from 'vue'
import Dom2canvas from 'dom2canvas'

onMounted(()=>{
  Dom2canvas(document.querySelector('.dom'),{
      canvas: document.querySelector("#render-container"),
      canvasHeight: 200,
      canvasWidth: 200
  })

  const container = document.querySelector('.VPHomeHero .container')
  const canvas = Dom2canvas(container.querySelector('.main'),{
      canvasHeight: 300,
      canvasWidth: 500
  })

  console.log(canvas)

})
</script>