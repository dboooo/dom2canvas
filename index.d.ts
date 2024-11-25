interface Options {
  width?: string
  height?: string
  canvas?: HTMLCanvasElement
}

export default function Dom2canvas(element?: HTMLElement | string, styles?: string, options?: Options): Promise<HTMLCanvasElement>
