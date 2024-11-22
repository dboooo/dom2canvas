interface Options {
    domWidth?:  string,
    canvas?: HTMLCanvasElement,
    canvasWidth?: number,
    canvasHeight?: number,
    downloadImage?: boolean,
    downloadPdf?: boolean,
}

export default function Dom2canvas(element?: HTMLElement | string, options?: Options): HTMLCanvasElement
