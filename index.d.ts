interface Options {
    domWidth?:  string,
    domHeight?: string,
    canvas?: HTMLCanvasElement,
    canvasWidth?: number,
    canvasHeight?: number,
    downloadImage?: boolean,
    downloadPdf?: boolean,
  }

export function Dom2canvas(element: HTMLElement | string, options: Options): void
