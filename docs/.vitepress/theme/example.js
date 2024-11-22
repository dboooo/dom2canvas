import Dom2canvas from 'dom2canvas'

Dom2canvas(document.querySelector('.dom'),{
    canvas: document.querySelector("#render-container"),
    domWidth: 200,
    canvasHeight: 200
})