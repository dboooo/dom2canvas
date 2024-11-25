---
layout: home

hero:
  name: "dom2canvas"
  text: "Convert DOM Elements/strings to canvas"
  actions:
    - theme: brand
      text: Examples
      link: /markdown-examples

features:
  - icon: ⚡️
    title: Mini
    details: Based on typescript, Only 0.67kb
  - icon: ✨
    title: Transform 
    details: Transform to canvas | image | pdf
  - icon: 🛠️
    title: Styles 
    details: Provide the styles you want to show!!
---

<script setup>
import { onMounted } from 'vue'
import Dom2canvas from 'dom2canvas'

onMounted(()=>{
  const container = document.querySelector('.test2')
  const el = document.querySelector('.test2 h1')
  Dom2canvas(el, '', {
    width: 400,
    height: 200
  }).then(canvas=>{
    container.append(canvas)
  })
})
</script>

<h2 class="test2 container" style="display: flex; justify-content: space-between;">
<div class="left">
  <h1>I will become canvas...</h1>
  <h3>Out put show right: </h3>
</div>
</h2>