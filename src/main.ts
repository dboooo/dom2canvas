import { jsPDF } from "jspdf";
import dom2canvas from 'dom2canvas'

const canvas = dom2canvas(document.querySelector('#app') as HTMLElement)

const pdf = new jsPDF();
pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0);
pdf.save("downloadedPdf.pdf");