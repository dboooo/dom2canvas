interface Options {
  width?: number
  height?: number
  canvas?: HTMLCanvasElement
}

export default function Dom2canvas(element?: HTMLElement | string, styles?: string , options?: Options): Promise<HTMLCanvasElement> {
  let _el

  let _styles = `
    <style>
      h1 {
        color: red;
      }
    </style>
  `

  if(typeof element === 'string') {
    _el = element
  } else if(element instanceof HTMLElement) {
    _el = element.outerHTML
  } else {
    _el = `
      <h1>Hello World124</h1>
    `
  }

  if(styles) {
    _styles = styles
  }

  const _svg = getSvg(_el, _styles, options?.width ?? 660 )

  let canvas: HTMLCanvasElement;
  if(options?.canvas) {
    canvas = options.canvas
  } else {
    canvas = document?.createElement('canvas')
  }

  const ctx = canvas.getContext("2d")
  canvas.width = options?.width ?? 660
  canvas.height = options?.height ?? 660

  const svg_blob = new Blob([_svg], { type: "image/svg+xml;" });
  const _file = new FileReader();

  return new Promise((resolved)=>{
    _file.readAsDataURL(svg_blob)
    _file.onload = function (e) {
      const result = e.target?.result as string;
      const img = new Image();
      img.src = result;
  
      img.onload = function () {
        new Promise(() => {
          if(ctx) {
            ctx.drawImage(img, 0, 0);
            resolved(canvas)
          } else {
            console.log("canvas error", canvas);
          }
        }).catch(err=>{
            console.error(err)
          })
      };
    };
  })

}

function getSvg (content: string, styles: string, width: number): string {
  return `
      <svg xmlns="http://www.w3.org/2000/svg">
        <foreignObject width="${width}" height="100%">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
          >
            ${styles}
            ${content}
          </div>
        </foreignObject>
      </svg>
  `
}