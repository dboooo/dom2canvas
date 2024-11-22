interface Options {
    domWidth?:  string,
    canvas?: HTMLCanvasElement,
    canvasWidth?: number,
    canvasHeight?: number,
    downloadImage?: boolean,
    closeAutoRender?: boolean
  }

export default function Dom2canvas(element?: HTMLElement | string, options?: Options): HTMLCanvasElement
