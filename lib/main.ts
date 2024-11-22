interface Options {
  domWidth?:  string,
  canvas?: HTMLCanvasElement,
  canvasWidth?: number,
  canvasHeight?: number,
  downloadImage?: boolean,
  downloadPdf?: boolean,
}

export default function Dom2canvas(element?: HTMLElement | string, options?: Options): HTMLCanvasElement {
  let insert_el = `
    <style>
      h1 {
        color: red;
      }
    </style>
    <h1>Hello World!</h1>
  `
  if(typeof element === 'string') {
    insert_el = element
  } else if(element?.innerHTML) {
    insert_el = element.innerHTML
  }


  const svg_data = insertElement(insert_el, options?.domWidth)

  let canvas: HTMLCanvasElement;
  if(options?.canvas) {
    canvas = options.canvas
  } else {
    canvas = document?.createElement('canvas')
  }

  const ctx = canvas.getContext("2d")
  canvas.width = options?.canvasWidth ?? 600
  canvas.height = options?.canvasHeight ?? 600

  const svg_blob = new Blob([svg_data], { type: "image/svg+xml;" });
  const file_url = new FileReader();

  file_url.readAsDataURL(svg_blob);

  file_url.onload = function (e) {
    const result = e.target?.result as string;
    const img = new Image();
    img.src = result;

    img.onload = function () {
      new Promise((resolve) => {
        if(ctx) {
          ctx.drawImage(img, 0, 0);
          resolve(img);
        } else {
          console.log("canvas error", canvas);
        }
      })
        .then(() => {
          if(options?.downloadImage) {
            downloadImage(canvas)
            return
          }
          document.body.appendChild(canvas)
        }).catch(err=>{
          console.error(err)
        })
    };
  };

  return canvas
}


function insertElement(ele: string, width="600px") {
  return `
    <svg xmlns="http://www.w3.org/2000/svg">
        <foreignObject width="${width}" height="100%">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
          >
            ${ele}
          </div>
        </foreignObject>
      </svg>
  `
}

function downloadImage(canvas: HTMLCanvasElement) {
  const link = document.createElement("a");

  link.setAttribute("href", canvas.toDataURL("image/png"));
  link.setAttribute("download", "index.png");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link)
}